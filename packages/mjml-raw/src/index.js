import { BodyComponent } from 'dhc-mjml-core'

export default class MjRaw extends BodyComponent {
  static endingTag = true

  render() {
    return this.getContent()
  }
}
