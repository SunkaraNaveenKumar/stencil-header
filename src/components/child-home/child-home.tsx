import { Component, h } from '@stencil/core';

@Component({
  tag: 'child-home',
  shadow: true,
})
export class MyComponent {


  render() {
    return (
      <p>Child Home</p>
    );
  }
}
