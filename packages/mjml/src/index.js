import mjml2html, { registerComponent } from 'dhc-mjml-core'
import { registerDependencies } from 'dhc-mjml-validator'

import { Social, SocialElement } from 'dhc-mjml-social'

registerComponent(require('dhc-mjml-body'))
registerComponent(require('dhc-mjml-head'))
registerComponent(require('dhc-mjml-head-attributes'))
registerComponent(require('dhc-mjml-head-breakpoint'))
registerComponent(require('dhc-mjml-head-font'))
registerComponent(require('dhc-mjml-head-preview'))
registerComponent(require('dhc-mjml-head-style'))
registerComponent(require('dhc-mjml-head-title'))
registerComponent(require('dhc-mjml-button'))
registerComponent(require('dhc-mjml-column'))
registerComponent(require('dhc-mjml-divider'))
registerComponent(require('dhc-mjml-group'))
registerComponent(require('dhc-mjml-image'))
registerComponent(require('dhc-mjml-raw'))
registerComponent(require('dhc-mjml-section'))
registerComponent(require('dhc-mjml-spacer'))
registerComponent(require('dhc-mjml-text'))
registerComponent(require('dhc-mjml-table'))
registerComponent(require('dhc-mjml-wrapper'))

registerComponent(Social)
registerComponent(SocialElement)

registerDependencies(require('./dependencies'))

export default mjml2html
