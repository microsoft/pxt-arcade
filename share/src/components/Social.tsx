import * as React from "react";
import { tickEvent } from '../telemetry/appinsights';

export interface SocialButtonProps {
    platform: "twitter" | "facebook";
    shareUrl: string;
}

export class SocialButton extends React.Component<SocialButtonProps, {}> {
    render() {
        const { platform, shareUrl } = this.props;
        return <a
            className={`social-button ${platform}`}
            href={platform === "twitter" ? getTwitterUrl(shareUrl) : getFacebookUrl(shareUrl)}
            onClick={() => {logClick(platform)}} />
    }
}

function getFacebookUrl(shareUrl: string) {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
}

function getTwitterUrl(shareUrl: string) {
    // https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
    const text = "Check out what I made with @MSMakeCode!";
    const hashtags = "ArcadeMod"

    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` +
        `&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`;
}

function logClick(platform: string) {
    tickEvent("shareExperiment.share.social", {"platform": platform});
}