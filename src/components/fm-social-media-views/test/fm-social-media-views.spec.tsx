import { newSpecPage } from '@stencil/core/testing';
import { FmSocialMediaViews } from '../fm-social-media-views';

describe('fm-social-media-views', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FmSocialMediaViews],
      html: `<fm-social-media-views></fm-social-media-views>`,
    });
    expect(page.root).toEqualHtml(`
      <fm-social-media-views>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fm-social-media-views>
    `);
  });
});
