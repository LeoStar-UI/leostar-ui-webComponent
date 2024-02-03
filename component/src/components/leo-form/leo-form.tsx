import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'leo-form',
  styleUrl: 'leo-form.scss',
  shadow: false,
})
export class LeoForm {

  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
