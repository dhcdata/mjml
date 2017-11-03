import { BodyComponent } from 'dhc-mjml-core'

export default class MjBody extends BodyComponent {
  static defaultAttributes = {
    width: '600px',
  }

  getChildContext() {
    return {
      ...this.context,
      containerWidth: this.getAttribute('width'),
    }
  }

  getStyles() {
    return {
      div: {
        'background-color': this.getAttribute('background-color'),
      },
    }
  }

  render() {
    return `
      <div
        ${this.htmlAttributes({
          class: this.getAttribute('css-class'),
          style: 'div',
        })}
      >
        ${this.renderChildren()}
      </div>
    `
  }
}
