import { newSpecPage } from '@stencil/core/testing';
import { MyHello } from '../my-hello';

describe('my-hello', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHello],
      html: `<my-hello></my-hello>`,
    });
    expect(page.root).toEqualHtml(`
      <my-hello>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-hello>
    `);
  });
});
