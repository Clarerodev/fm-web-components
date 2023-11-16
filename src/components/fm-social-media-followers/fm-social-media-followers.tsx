import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';
import { SocialMediaInterface } from '../../interfaces/social-media.interface';

@Component({
  tag: 'fm-social-media-followers',
  styleUrl: 'fm-social-media-followers.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class FmSocialMediaFollowers {

  @Prop() socialMediaInfo: string;

  private _socialMediaImg: string = '';
  private _socialMediaInfo: SocialMediaInterface;

  private getFollowerCounterFragment() {
    return <div class={'social-media-follower--counter'}>
      <span>{this._socialMediaInfo.followerCount}</span>
      <span class={'social-media-follower--counter-follower'}>Followers</span>
    </div>
  }

  private getSocialNetworkFragment(){
    this._socialMediaImg = getAssetPath(`../assets/icon/icon-${this._socialMediaInfo.type}.svg`);

    return <div class={'social-media-follower--social-network'}>
          <img src={this._socialMediaImg} height="20" width="20"/>
          <span class={'social-media-follower--username'}>@{this._socialMediaInfo.userName}</span>
        </div>
  }

  private getFollowerCounterByDayFragment() {
    const counterByDay = Number(this._socialMediaInfo.followerByDay);
    const counter = counterByDay < 0 ? counterByDay * -1 : counterByDay;
    const counterSymbol = counterByDay < 0 ? 'icon-down' : 'icon-up';
    const counterByDayImg = getAssetPath(`../assets/icon/${counterSymbol}.svg`);

    let counterRecordStyles = 'social-media-follower--counter-record';
    counterRecordStyles += counterByDay < 0 ? ' negative' : '';

    return <div class={'social-media-follower--counter-by-day'}>
      <img src={counterByDayImg} width="8" height="4"/>
      <span class={counterRecordStyles} >{counter} Today</span>
    </div>
  }

  private getSocialMediaItem() {
    return <div class={'social-media-follower--item ' + this._socialMediaInfo.type} >
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

  componentWillRender() {
    if(this.socialMediaInfo) {
       this._socialMediaInfo = JSON.parse(this.socialMediaInfo);
    }
  }

  render() {
    return (
      <Host>
        { this.socialMediaInfo !== undefined ?
          this.getSocialMediaItem() :
          <span>Loading...</span>
        }
      </Host>
    );
  }

}
