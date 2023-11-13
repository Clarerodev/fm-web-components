import { newSpecPage } from '@stencil/core/testing';
import { FmSocialMediaFollowers } from '../fm-social-media-followers';

describe('fm-social-media-followers', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FmSocialMediaFollowers],
      html: `<fm-social-media-followers></fm-social-media-followers>`,
    });
    expect(page.root).toEqualHtml(`
      <fm-social-media-followers>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fm-social-media-followers>
    `);
  });
});
