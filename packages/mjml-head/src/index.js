import { HeadComponent } from 'dhc-mjml-core'

export default class MjHead extends HeadComponent {
  handler() {
    this.handlerChildren()
  }
}
