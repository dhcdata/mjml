import { version as coreVersion } from 'mjml-core/package.json' // eslint-disable-line import/first
import { version as cliVersion } from '../package.json'

export const DEFAULT_OPTIONS = {
  beautify: true,
  minify: false,
}

export const CLI_OPTIONS = {
  r: {
    alias: 'read',
    describe: 'Compile MJML File(s)',
    type: 'array',
  },
  w: {
    alias: 'watch',
    type: 'array',
    describe: 'Watch and compile MJML File(s) when modified',
  },
  i: {
    alias: 'stdin',
    describe: 'Compiles MJML from input stream',
  },
  s: {
    alias: 'stdout',
    describe: 'Output HTML to stdout',
  },
  o: {
    alias: 'output',
    type: 'string',
    describe: 'Filename/Directory to output compiled files',
  },
  c: {
    alias: 'config',
    coerce: JSON.parse,
    type: 'string',
    describe: 'Option to pass to mjml-core',
  },
  version: {
    alias: 'V',
  },
}

export let CLI_VERSION = `mjml-core: ${coreVersion}\nmjml-cli: ${cliVersion}`
