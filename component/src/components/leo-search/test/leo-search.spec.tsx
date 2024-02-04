import { newSpecPage } from '@stencil/core/testing';
import { LeoSearch } from '../leo-search';

describe('leo-search', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoSearch],
      html: '<leo-search></leo-search>',
    });
    expect(root).toEqualHtml(`
      <leo-search>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </leo-search>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [LeoSearch],
      html: `<leo-search first="Stencil" last="'Don't call me a framework' JS"></leo-search>`,
    });
    expect(root).toEqualHtml(`
      <leo-search first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </leo-search>
    `);
  });
});
