import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'fm-social-media-views',
  styleUrl: 'fm-social-media-views.css',
  shadow: true,
})
export class FmSocialMediaViews {

  @Prop() type: string;
  @Prop() likesCount: string;
  @Prop() likesByDay: string;
  @Prop() typeCounter: string;

  private _socialMediaImg: string = '';

  private getLikesPercentaje() {
    const counterByDay = Number(this.likesByDay);
    const counter = counterByDay < 0 ? counterByDay * -1 : counterByDay;
    const counterSymbol = counterByDay < 0 ? 'icon-down' : 'icon-up';
    const counterByDayImg = getAssetPath(`../assets/${counterSymbol}.svg`);

    let counterRecordStyles = 'social-media-likes--counter-record';
    counterRecordStyles += counterByDay < 0 ? ' negative' : '';

    return <div class={'social-media-likes--counter-by-day'}>
      <img src={counterByDayImg} width="8" height="4" alt={'signal icon '+ counterSymbol}/>
      <span class={counterRecordStyles} >{counter} %</span>
    </div>
  }

  private getSocialNetworkFragment(){
     this._socialMediaImg = getAssetPath(`../assets/icon-${this.type}.svg`);

    return <div class={'social-media-views--social-network social-media-views--item-content--limit'}>
          <img src={this._socialMediaImg} height="20" width="20" alt={'social network icon ' + this.type}/>
        </div>
  }

  private getSocialMediaItem() {
    return <div class={'social-media-views--item ' + this.type}>
      <div class={'social-media-views--item-content'}>
        <h3 class={'social-media-views--item-content--page-view social-media-view--item-content--limit'}>{this.typeCounter}</h3>
        {this.getSocialNetworkFragment()}
      </div>
      <div class={'social-media-views--item-content'}>
        <p>{this.likesCount}</p>
        {this.getLikesPercentaje()}
      </div>
    </div>
  }

  render() {
    return (
      <Host>
        { this.type !== undefined ?
          <article>
            {this.getSocialMediaItem()}
          </article> :
          <span>Loading...</span>
        }
      </Host>
    );
  }

}
