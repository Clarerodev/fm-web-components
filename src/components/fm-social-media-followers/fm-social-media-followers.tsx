import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'fm-social-media-followers',
  styleUrl: 'fm-social-media-followers.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class FmSocialMediaFollowers {

  @Prop() type: string;
  @Prop() userName: string;
  @Prop() followerCount: string;
  @Prop() followerByDay: string;

  private _socialMediaImg: string = '';

  private getFollowerCounterFragment() {
    return <div class={'social-media-follower--counter'}>
      <span>{this.followerCount}</span>
      <span class={'social-media-follower--counter-follower'}>Followers</span>
    </div>
  }

  private getSocialNetworkFragment(){
    this._socialMediaImg = getAssetPath(`../assets/icon-${this.type}.svg`);

    return <div class={'social-media-follower--social-network'}>
          <img src={this._socialMediaImg} height="20" width="20"/>
          <span class={'social-media-follower--username'}>@{this.userName}</span>
        </div>
  }

  private getFollowerCounterByDayFragment() {
    const counterByDay = Number(this.followerByDay);
    const counter = counterByDay < 0 ? counterByDay * -1 : counterByDay;
    const counterSymbol = counterByDay < 0 ? 'icon-down' : 'icon-up';
    const counterByDayImg = getAssetPath(`../assets/${counterSymbol}.svg`);

    let counterRecordStyles = 'social-media-follower--counter-record';
    counterRecordStyles += counterByDay < 0 ? ' negative' : '';

    return <div class={'social-media-follower--counter-by-day'}>
      <img src={counterByDayImg} width="8" height="4"/>
      <span class={counterRecordStyles} >{counter} Today</span>
    </div>
  }

  private getSocialMediaItem() {
    return <div class={'social-media-follower--item ' + this.type} >
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
  }

  render() {
    return (
      <Host>
        { this.type !== undefined ?
          this.getSocialMediaItem() :
          <span>Loading...</span>
        }
      </Host>
    );
  }

}
