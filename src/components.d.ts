/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FmSocialMediaFollowers {
        "followerByDay": string;
        "followerCount": string;
        "type": string;
        "userName": string;
    }
    interface FmSocialMediaViews {
        "likesByDay": string;
        "likesCount": string;
        "type": string;
        "typeCounter": string;
    }
}
declare global {
    interface HTMLFmSocialMediaFollowersElement extends Components.FmSocialMediaFollowers, HTMLStencilElement {
    }
    var HTMLFmSocialMediaFollowersElement: {
        prototype: HTMLFmSocialMediaFollowersElement;
        new (): HTMLFmSocialMediaFollowersElement;
    };
    interface HTMLFmSocialMediaViewsElement extends Components.FmSocialMediaViews, HTMLStencilElement {
    }
    var HTMLFmSocialMediaViewsElement: {
        prototype: HTMLFmSocialMediaViewsElement;
        new (): HTMLFmSocialMediaViewsElement;
    };
    interface HTMLElementTagNameMap {
        "fm-social-media-followers": HTMLFmSocialMediaFollowersElement;
        "fm-social-media-views": HTMLFmSocialMediaViewsElement;
    }
}
declare namespace LocalJSX {
    interface FmSocialMediaFollowers {
        "followerByDay"?: string;
        "followerCount"?: string;
        "type"?: string;
        "userName"?: string;
    }
    interface FmSocialMediaViews {
        "likesByDay"?: string;
        "likesCount"?: string;
        "type"?: string;
        "typeCounter"?: string;
    }
    interface IntrinsicElements {
        "fm-social-media-followers": FmSocialMediaFollowers;
        "fm-social-media-views": FmSocialMediaViews;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fm-social-media-followers": LocalJSX.FmSocialMediaFollowers & JSXBase.HTMLAttributes<HTMLFmSocialMediaFollowersElement>;
            "fm-social-media-views": LocalJSX.FmSocialMediaViews & JSXBase.HTMLAttributes<HTMLFmSocialMediaViewsElement>;
        }
    }
}
