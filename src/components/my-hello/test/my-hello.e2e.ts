import { newE2EPage } from '@stencil/core/testing';

describe('my-hello', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-hello></my-hello>');

    const element = await page.find('my-hello');
    expect(element).toHaveClass('hydrated');
  });
});
