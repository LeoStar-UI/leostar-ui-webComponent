import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'leo-switch',
  styleUrl: 'leo-switch.css',
  shadow: true,
})
export class LeoSwitch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
