import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'leo-search',
  styleUrl: 'leo-search.scss',
  shadow: false,
})
export class LeoSearch {

  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
