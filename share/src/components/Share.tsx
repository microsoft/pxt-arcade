import React from 'react';

import '../css/Share.css';
import '../css/icons.css';

import * as util from "./util";
import { SocialButton } from './Social';
import { tickEvent } from '../telemetry/appinsights';

const legalText = "You need to publish your project to share it. You acknowledge having consent to publish this project.";
const testURL = "data:image/png;base64,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";

interface ShareProps {
    changeMode: (mode: "play" | "share" | "mod") => void;
    proj: util.UserProject;
}

interface ShareState {
    publishID?: string;
    pending?: boolean;
}

class Share extends React.Component<ShareProps, ShareState> {

    constructor(props: ShareProps) {
        super(props);
        this.state = {};
    }

    render() {
        const { changeMode, proj } = this.props;

        const screenshot = proj ? proj.screenshot : testURL;
        return (
            <div className="share-page">
                <h1>Share your game!</h1>
                <div className="share-screenshot-container">
                    <img className="share-screenshot" src={screenshot} ></img>
                </div>
                {(this.state && this.state.publishID) ? this.renderShared() : this.renderUnshared()}
                <div className="share-action">
                    <button className="share-button play-button" onClick={() => changeMode("play")}>Play Again</button>
                </div>
                {this.state && this.state.publishID && <p className="do-more-txt">
                    Want to do more? Open the link above on a laptop to edit your project in the full MakeCode Arcade experience.
                </p>}
            </div>
        )
    }

    protected renderUnshared() {
        const { pending } = this.state;
        return <div>
            <div className="share-legal-text">
                {legalText}
            </div>
            <div className="share-action">
                <button className="share-button publish-button" onClick={this.publishScript}>{pending ? <div className="spinner" /> : "Publish"}</button>
            </div>
        </div>
    }

    protected renderShared(showSocial?: boolean) {
        const { publishID } = this.state;
        const shareLink = `https://makecode.com/${publishID}`;

        return <div>
            <div className="copy-group">
                <input
                    className="attached-copy-input"
                    ref="url-input"
                    value={shareLink}
                    readOnly={true}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false} />
                <button className="attached-copy-button" onClick={this.copyToClipboard}>
                    <div className="copy-button-icon" />
                </button>
            </div>
            {showSocial && <div className="social-buttons">
                <SocialButton platform="twitter" shareUrl={shareLink} />
                <SocialButton platform="facebook" shareUrl={shareLink} />
            </div>}
        </div>
    }

    protected publishScript = () => {
        const { proj } = this.props;

        this.setState({ pending: true });

        if (!proj) {
            // Just for testing, it's impossible to hit this case in the normal flow
            setTimeout(() => {
                this.setState({
                    publishID: "xxxx-xxxx-xxxx-xxxx"
                })
            }, 2000);
        }
        else {
            util.shareScriptAsync(proj.screenshot, proj.mainTs, proj.mainBlocks)
                .then(resp => {
                    this.setState({
                        publishID: resp.json.shortid
                    });
                    tickEvent("shareExperiment.share.publish");
                });
        }

    }

    protected copyToClipboard = () => {
        const input = this.refs["url-input"] as HTMLInputElement;

        if (input) {
            input.focus();
            input.setSelectionRange(0, 9999);
        }

        try {
            const success = document.execCommand("copy");
            tickEvent("shareExperiment.share.copy");
        } catch (e) {
        }
    }
}

export default Share;