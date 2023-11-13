import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fm-social-media-views',
  styleUrl: 'fm-social-media-views.css',
  shadow: true,
})
export class FmSocialMediaViews {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
