import { HeadComponent } from 'dhc-mjml-core'

export default class MjBreakpoint extends HeadComponent {
  static endingTag = true

  handler() {
    const { add } = this.context

    add('breakpoint', this.getAttribute('width'))
  }
}
