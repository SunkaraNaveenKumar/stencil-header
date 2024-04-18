import { Component, Fragment,Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
  //  * The first name
  //  */
  @Prop() first: string;

  // /**
  //  * The middle name
  //  */
  @Prop() middle: string;

  // /**
  //  * The last name
  //  */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Fragment>
        <div>Hello, World! I'm {this.getText()}</div>;
        <stencil-route-link activeClass="active" url="/" exact={true}>
          Home
        </stencil-route-link>
        <stencil-route-link activeClass="active" url="/child-component" exact={true}>
          Child
        </stencil-route-link>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="child-home" exact={true} />
            <stencil-route url="/child-component" componentProps={{ name: 'Walkie-talkie' }} component="child-component" exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </Fragment>
    );
  }
}
