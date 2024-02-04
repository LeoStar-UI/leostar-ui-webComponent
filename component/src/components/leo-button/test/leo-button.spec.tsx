import { newSpecPage } from '@stencil/core/testing';
import { LeoButton } from '../leo-button';

describe('leo-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoButton],
      html: '<leo-button></leo-button>',
    });
    expect(root).toEqualHtml(`
      <leo-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </leo-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [LeoButton],
      html: `<leo-button first="Stencil" last="'Don't call me a framework' JS"></leo-button>`,
    });
    expect(root).toEqualHtml(`
      <leo-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </leo-button>
    `);
  });
});
