/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@clarerodev/fm-web-components';


@ProxyCmp({
  inputs: ['followerByDay', 'followerCount', 'socialMediaInfo', 'type', 'userName']
})
@Component({
  selector: 'fm-social-media-followers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['followerByDay', 'followerCount', 'socialMediaInfo', 'type', 'userName'],
})
export class FmSocialMediaFollowers {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FmSocialMediaFollowers extends Components.FmSocialMediaFollowers {}


@ProxyCmp({
})
@Component({
  selector: 'fm-social-media-views',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class FmSocialMediaViews {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FmSocialMediaViews extends Components.FmSocialMediaViews {}


