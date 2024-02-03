import { Component, Host, Prop, h } from '@stencil/core';
import { createNamespace } from '../../utils/create/index';
import classNames from 'classnames';
const [bem] = createNamespace('leo-button');

@Component({
  tag: 'leo-button',
  styleUrl: 'leo-button.scss',
  shadow: true,
})
export class LeoButton {
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

  @Prop() type = 'default';
  @Prop() size = 'normal';

  render() {
    const {
      type,
      size
    } = this;
    const classes = [classNames(bem([type, size]))];
    return <Host class={classNames('leo-button', classes)}><slot></slot></Host>;
  }
}
