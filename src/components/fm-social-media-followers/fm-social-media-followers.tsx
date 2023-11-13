import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fm-social-media-followers',
  styleUrl: 'fm-social-media-followers.css',
  shadow: true,
})
export class FmSocialMediaFollowers {

  private getFollowerCounterFragment() {
    return <div class={'social-media-follower--counter'}>
      <span>1987</span>
      <span class={'social-media-follower--counter-follower'}>Followers</span>
    </div>
  }

  private getSocialNetworkFragment(){
    return <div class={'social-media-follower--social-network'}>
          <span>@clarero.dev</span>
        </div>
  }
  
  private getFollowerCounterByDayFragment() {
    return <div class={'social-media-follower--counter-by-day'}>
      <span>12 Today</span>
    </div>
  }

  render() {
    return (
      <Host>
        <h1>Social media component</h1>
        <div class={'social-media-follower--item'}>
          <div class={'social-media-follower--item-social-network'}>
            {this.getSocialNetworkFragment()}
          </div>
          <div class={'social-media-follower--item-follower-counter'}>
            {this.getFollowerCounterFragment()}
          </div>
          <div class={'social-media-follower--item-follower-by-day'}>
            {this.getFollowerCounterByDayFragment()}
          </div>
        </div>
      </Host>
    );
  }

}
