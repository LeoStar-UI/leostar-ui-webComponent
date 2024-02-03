import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'leo-card',
  styleUrl: 'leo-card.scss',
  shadow: false,
})
export class LeoCard {

  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
