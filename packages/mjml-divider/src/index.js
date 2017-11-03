import { BodyComponent } from 'dhc-mjml-core'

import widthParser from 'dhc-mjml-core/lib/helpers/widthParser'

export default class MjDivider extends BodyComponent {
  static tagOmission = true

  static defaultAttributes = {
    'border-color': '#000000',
    'border-style': 'solid',
    'border-width': '4px',
    padding: '10px 25px',
    width: '100%',
  }

  getStyles() {
    const p = {
      'border-top': ['style', 'width', 'color']
        .map(attr => this.getAttribute(`border-${attr}`))
        .join(' '),
      'font-size': 1,
      margin: '0px auto',
      width: this.getAttribute('width'),
    }

    return {
      p,
      outlook: {
        ...p,
        width: this.getOutlookWidth()
      }
    }
  }

  getOutlookWidth() {
    const { containerWidth } = this.context

    const width = this.getAttribute('width')

    const { parsedWidth, unit } = widthParser(width)

    switch (unit) {
      case '%':
        return `${parseInt(containerWidth, 10) * parseInt(parsedWidth, 10) / 100}px`

      default:
        return containerWidth
    }
  }

  renderAfter() {
    return `
      <!--[if mso | IE]>
        <table
          ${this.htmlAttributes({
            align: 'center',
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            style: 'outlook',
            role: 'presentation',
            width: this.getOutlookWidth()
          })}
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
    `
  }

  render() {
    return `
      <p
        ${this.htmlAttributes({
          style: 'p',
        })}
      >
      </p>
      ${this.renderAfter()}
    `
  }
}
