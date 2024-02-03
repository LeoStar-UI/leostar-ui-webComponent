import { newSpecPage } from '@stencil/core/testing';
import { LeoSwitch } from '../leo-switch';

describe('leo-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LeoSwitch],
      html: `<leo-switch></leo-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <leo-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </leo-switch>
    `);
  });
});
