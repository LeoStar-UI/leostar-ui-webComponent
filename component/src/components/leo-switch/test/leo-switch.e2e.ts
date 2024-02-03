import { newE2EPage } from '@stencil/core/testing';

describe('leo-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<leo-switch></leo-switch>');

    const element = await page.find('leo-switch');
    expect(element).toHaveClass('hydrated');
  });
});
