import { Component, Host, h, Prop, Method } from '@stencil/core';
/**
 * Some comment that should go in the readme
 *
 * @slot - Default slot for content
 */
@Component({
  tag: 'my-hello',
  styleUrl: 'my-hello.css',
  shadow: true,
})
export class MyHello {

  /**
   * A property that is output to the readme correctly
   */
  @Prop() myProp: string;

  /**
   * A method that is output to the readme correctly
   * @returns
   */
  @Method()
  async testMethod() {
    return Promise.resolve('foo');
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
