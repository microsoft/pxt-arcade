namespace physics {
    export interface Entity {
        x: number;
        y: number;
        width: number;
        height: number;

        _didMove: boolean;
        _isDead: boolean;
        onCollision?(other: Entity): void;
    }

    export class QuadTreeNode {
        top: number;
        right: number;
        left: number;
        bottom: number;

        ne?: QuadTreeNode;
        se?: QuadTreeNode;
        sw?: QuadTreeNode;
        nw?: QuadTreeNode;
        occupants?: Entity[];

        // FIXME: subclass instead of passing this to every node....
        checker: (a: Entity, b: Entity) => boolean;

        constructor(top: number, right: number, left: number, bottom: number, checker: (a: Entity, b: Entity) => boolean) {
            this.top = top;
            this.right = right;
            this.left = left;
            this.bottom = bottom;
            this.checker = checker;
        }

        insert(entity: Entity) {
            if (!this.isWithinRegion(entity)) return false;

            if (!this.ne) {
                const midX = this.left + (this.right - this.left) / 2;
                const midY = this.top + (this.bottom - this.top) / 2;
                this.ne = new QuadTreeNode(this.top, this.right, midX, midY, this.checker);
                this.se = new QuadTreeNode(midY, this.right, midX, this.bottom, this.checker);
                this.sw = new QuadTreeNode(midY, midX, this.left, this.bottom, this.checker);
                this.nw = new QuadTreeNode(this.top, midX, this.left, midY, this.checker);
            }

            if (!this.ne.insert(entity) && !this.se.insert(entity) && !this.sw.insert(entity) && !this.nw.insert(entity)) {
                this.occupants.push(entity);
            }

            return true;
        }

        isWithinRegion(entity: Entity) {
            const left = entity.x;
            const top = entity.y;
            const right = entity.x + entity.width;
            const bottom = entity.y + entity.height;

            return left >= this.left && top >= this.top && right < this.right && bottom < this.bottom;
        }

        checkCollisions(e?: Entity) {
            if (e) {
                if (this.occupants && this.occupants.length) {
                    for (const entity of this.occupants) {
                        if (this.checker(e, entity)) {
                            if (e.onCollision) {
                                e.onCollision(entity);
                            }
                            if (entity.onCollision) {
                                entity.onCollision(e);
                            }
                        }
                    }
                }

                if (this.ne) {
                    recurse(e);
                }
            }
            else {
                if (this.occupants && this.occupants.length) {
                    for (const entity of this.occupants) {
                        this.checkCollisions(e);
                    }
                }

                recurse();
            }

            function recurse(e?: Entity) {
                this.ne.checkCollisions(e);
                this.nw.checkCollisions(e);
                this.se.checkCollisions(e);
                this.sw.checkCollisions(e);
            }
        }
    }

    export function prune(node: QuadTreeNode) {
        if (node.occupants && node.occupants.length) {
            return false;
        }

        if (prune(node.ne) && prune(node.sw) && prune(node.sw) && prune(node.nw)) {
            node.occupants = undefined;
            node.ne = undefined;
            node.sw = undefined;
            node.se = undefined;
            node.nw = undefined;
            return true;
        }

        return false;
    }

    export function balance(node: QuadTreeNode, root?: QuadTreeNode) {
        if (!root) root = node;

        if (node.occupants && node.occupants.length) {
            let toRemove: Entity[] = [];
            for (const occupant of node.occupants) {
                if (occupant._isDead || occupant._didMove) {
                    toRemove.push(occupant);
                }
            }

            for (const entity of toRemove) {
                node.occupants.removeElement(entity);
                if (!entity._isDead) {
                    if (!node.insert(entity)) {
                        root.insert(entity);
                    }
                    entity._didMove = false;
                }
            }
        }

        balance(node.ne);
        balance(node.nw);
        balance(node.sw);
        balance(node.se);
    }
}