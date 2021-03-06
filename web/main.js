import Handsontable from 'handsontable'
import { MultiSelectEditor, MultiSelectRenderer } from '../lib/multi-select'
import data from './users'
import options from './options'

import './style.less'
import '../lib/multi-select.less'

const sheet = document.getElementById('sheet')
const headers = [ 'First name', 'Last name', 'Email', 'Job title', 'Country', 'Single Number', 'Multi Numbers' ]

const numberOptions = Array(50)
  .fill(null)
  .map((_, index) => ({
    key: index,
    value: index,
  }))

Handsontable(sheet, {
  data,
  licenseKey: 'non-commercial-and-evaluation',
  rowHeaders: true,
  colHeaders: headers,
  width: '60%',
  stretchH: 'all',
  columns: [
    {},
    {},
    {},
    {},
    {
      type: 'text',
      editor: MultiSelectEditor,
      renderer: MultiSelectRenderer,
      select: {
        config: {
          valueKey: 'key',
          labelKey: 'text',
          separator: ';',
        },
        options (source, value) {
          return new Promise((resolve) => {
            setTimeout(resolve, 500, options)
          })
        },
      },
    }, {
      type: 'numeric',
      editor: MultiSelectEditor,
      renderer: MultiSelectRenderer,
      select: {
        config: {
          valueKey: 'key',
          labelKey: 'value',
        },
        options (source, value) {
          return new Promise((resolve) => {
            setTimeout(resolve, 500, numberOptions)
          })
        },
      },
    },
  ],
})
