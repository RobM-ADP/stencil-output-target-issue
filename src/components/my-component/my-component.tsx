import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * @slot test - Should be used on an icon in a button that has no text.
 * @slot - Should be used on an icon in a button that has no text.
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <slot/>
        <slot name="test"/>
      </div>
    );
  }
}
