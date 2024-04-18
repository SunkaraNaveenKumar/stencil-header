import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'child-component',
  shadow: true,
})
export class MyComponent {
  @Prop() name: string;

  render() {
    return <p>{this.name}</p>;
  }
}
