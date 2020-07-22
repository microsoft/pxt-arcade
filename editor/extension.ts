/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    function patchBlocks(pkgTargetVersion: string, dom: Element) {
        // Perform the following upgrades for sprite event blocks:
        // - Change variables_get_reporter shadows into argument_reporter_custom shadows for sprite
        //   event blocks
        // - Delete variables_get blocks that are connected to a shadow on a sprite event block
        // - If a variables_get block inside an event handler has the same name as an event handler
        //   argument name, change the variables_get block to an argument_reporter_custom block

        /*
        Old event blocks (variables_get_reporter):

        <block type="spritesoverlap">
            <value name="HANDLER_DRAG_PARAM_sprite">
                <shadow type="variables_get_reporter">
                    <field name="VAR">sprite</field>
                </shadow>
                <block type="variables_get">
                    <field name="VAR">myVariable</field>
                </block>
            </value>
            ...
            <value name="HANDLER_DRAG_PARAM_otherSprite">
                <shadow type="variables_get_reporter">
                    <field name="VAR">otherSprite</field>
                </shadow>
            </value>
            ...
            <statement name="HANDLER">
                <block type="spritesetpos">
                    <value name="sprite">
                        <block type="variables_get">
                            <field name="VAR">myVariable</field>
                        </block>
                    </value>
                    ...
                </block>
            </statement>
        </block>


        New event blocks (argument_reporter_custom):

        <block type="spritesoverlap" x="490" y="470">
            <value name="HANDLER_DRAG_PARAM_sprite">
                <shadow type="argument_reporter_custom">
                    <mutation typename="Sprite"></mutation>
                    <field name="VALUE">sprite</field>
                </shadow>
            </value>
            ...
            <value name="HANDLER_DRAG_PARAM_otherSprite">
                <shadow type="argument_reporter_custom">
                    <mutation typename="Sprite"></mutation>
                    <field name="VALUE">otherSprite</field>
                </shadow>
            </value>
            ...
            <statement name="HANDLER">
                <block type="spritesetpos">
                    <value name="sprite">
                        <block type="argument_reporter_custom">
                            <mutation typename="Sprite"></mutation>
                            <field name="VALUE">sprite</field>
                        </block>
                    </value>
                    ...
                </block>
            </statement>
        </block>
        */
        const allEventNodes = U.toArray(dom.querySelectorAll("block[type=spritesoverlap]"))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesoncreated]")))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesondestroyed]")))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesollisions]")));

        allEventNodes.forEach(node => {
            // Don't rewrite if already upgraded, i.e. if there are argument_reporter_custom
            // shadows already present
            if (node.querySelectorAll("shadow[type=argument_reporter_custom]").length > 0) {
                return;
            }

            const paramValues = U.toArray(node.children).filter(child => {
                return child.tagName == "value" && child.getAttribute("name").indexOf("HANDLER_DRAG_PARAM_") !== -1;
            });
            const statementsRoot = node.querySelector("statement[name=HANDLER]");
            const usedVariables = U.toArray(statementsRoot.querySelectorAll("block[type=variables_get]"));

            paramValues.forEach(value => {
                let oldVariableName = "";
                const connectedVarBlock = getChildBlock(value, "variables_get");

                if (connectedVarBlock) {
                    // A variable is connected to the shadow variable reporter; use the name for
                    // the argument reporter and delete the variable
                    const connectedVarField = getField(connectedVarBlock, "VAR");
                    oldVariableName = connectedVarField.textContent;
                    value.removeChild(connectedVarBlock);
                }

                const handlerVarShadow = getShadow(value, "variables_get_reporter");
                const handlerVarField = getField(handlerVarShadow, "VAR");
                const argReporterName = handlerVarField.textContent;
                oldVariableName = oldVariableName || argReporterName;
                changeVariableToSpriteReporter(handlerVarShadow, argReporterName);

                // Change all references to this variable inside the handler to argument reporters
                usedVariables.forEach(usedVarBlock => {
                    const usedVarField = getField(usedVarBlock, "VAR");
                    if (usedVarField && usedVarField.textContent === oldVariableName) {
                        // This variable is a reference to a handler parameter; change it to an
                        // argument reporter
                        changeVariableToSpriteReporter(usedVarBlock, argReporterName);
                    }
                });
            });
        });

        /**
         * Upgrade for scene.setTile() which went from being expandable to not
         */
        U.toArray(dom.querySelectorAll("block[type=gamesettile]")).forEach(block => {
            const mutation = getMutation(block);

            if (!mutation) return; // Already upgraded

            const expanded = mutation.getAttribute("_expanded") !== "0";
            block.removeChild(mutation);

            if (expanded) {
                // The value input must already be in the XML, so no changes needed
                return;
            }
            else {
                // There might be a value input present, but we should remove it
                // and replace it with the default to replicate the unexpanded behavior
                const value = getChildNode(block, "value", "name", "wall");
                if (value) {
                    block.removeChild(value);
                }

                const newValue = replaceToggle("wall", "toggleOnOff", "on", "false");
                block.appendChild(newValue);
            }
        });
        /**
         * Upgrade for game.over() which went from being expandable twice to being expandable once
         */
        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.10.0") < 0) {
            U.toArray(dom.querySelectorAll("block[type=gameOver]")).forEach(block => {
                const mutation = getMutation(block);
                const value = getChildNode(block, "value", "name", "win");
                const expansion = mutation.getAttribute("_expanded")

                if (expansion !== "0") {
                    // Decrement expansion level, as win is now required
                    mutation.setAttribute("_expanded", (Number(expansion) - 1) + "");
                } else {
                    // Remove old value to replace it default to maintain current behavior
                    if (value) {
                        block.removeChild(value);
                    }

                    const newValue = replaceToggle("win", "toggleWinLose", "win", "false");
                    block.appendChild(newValue);
                }
            });
        }

        /**
         * Upgrade for enum SpriteKind -> SpriteKindLegacy
         */
        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.11.20") < 0) {
            pxt.U.toArray(dom.querySelectorAll("variable[type=SpriteKind]")).forEach(block => {
                block.setAttribute("type", "SpriteKindLegacy")
            });
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.18.9") < 0) {
            /**
             * Add draggable param for tile that was hit as child of sprite hit wall block
            <value name="HANDLER_DRAG_PARAM_location">
                <shadow type="argument_reporter_custom">
                    <mutation typename="tiles.Location"/>
                    <field name="VALUE">location</field>
                </shadow>
            </value>
             */
            U.toArray(dom.querySelectorAll("block[type=spriteshitwall]")).forEach(block => {
                const doc = block.ownerDocument;
                const tileHitParam = doc.createElement("value");
                tileHitParam.setAttribute("name", "HANDLER_DRAG_PARAM_location");

                const shadow = doc.createElement("shadow");
                shadow.setAttribute("type", "argument_reporter_custom")

                const mut = doc.createElement("mutation");
                mut.setAttribute("typename", "tiles.Location");

                const field = doc.createElement("field");
                field.setAttribute("name", "VALUE");
                field.textContent = "location";

                shadow.appendChild(mut);
                shadow.appendChild(field);

                tileHitParam.appendChild(shadow);
                block.appendChild(tileHitParam);
            });
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.18.9") < 0) {
            /**
             * move from tilemap namespace to tiles namespace
             * <block type="tilemap_locationXY">
                    <field name="xy">tilemap.XY.column</field>
                    <value name="location">
                        <block type="variables_get">
                            <field name="VAR" id="L%xa3_Yy]Kq+]Q|yE{Fv">location</field>
                        </block>
                    </value>
                </block>
             */
            U.toArray(dom.querySelectorAll("block[type=tilemap_locationXY]")).forEach(block => {
                const xyField = getField(block, "xy");
                xyField.textContent = (xyField.textContent || "").replace(/^tilemap./, "tiles.");
            });
        }
    }

    function changeVariableToSpriteReporter(varBlockOrShadow: Element, reporterName: string) {
        const varField = getField(varBlockOrShadow, "VAR");
        varBlockOrShadow.setAttribute("type", "argument_reporter_custom");
        varField.setAttribute("name", "VALUE");
        varField.textContent = reporterName;
        varField.removeAttribute("variabletype");
        varField.removeAttribute("id");
        const mutation = varBlockOrShadow.ownerDocument.createElement("mutation");
        mutation.setAttribute("typename", "Sprite");
        varBlockOrShadow.insertBefore(mutation, varBlockOrShadow.firstChild);
    }

    function getField(parent: Element, name: string) {
        return getChildNode(parent, "field", "name", name);
    }

    function getShadow(parent: Element, type: string) {
        return getChildNode(parent, "shadow", "type", type);
    }

    function getChildBlock(parent: Element, type: string) {
        return getChildNode(parent, "block", "type", type);
    }

    function getChildNode(parent: Element, nodeType: string, idAttribute: string, idValue: string) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children.item(i);
            if (child.tagName === nodeType && child.getAttribute(idAttribute) === idValue) {
                return child;
            }
        }
        return undefined;
    }

    function getMutation(parent: Element) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children.item(i);
            if (child.tagName === "mutation") {
                return child;
            }
        }
        return undefined;
    }

    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading arcade target extensions...')

        const res: pxt.editor.ExtensionResult = {
            blocklyPatch: patchBlocks
        };

        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }

    function replaceToggle(valueName: string, shadowType: string, fieldName: string, fieldValue: string) {
        const newValue = document.createElement("value");
        newValue.setAttribute("name", valueName);

        const shadow = document.createElement("shadow");
        shadow.setAttribute("type", shadowType);

        const field = document.createElement("field");
        field.setAttribute("name", fieldName);
        field.textContent = fieldValue;

        shadow.appendChild(field);
        newValue.appendChild(shadow);
        return newValue;
    }
}