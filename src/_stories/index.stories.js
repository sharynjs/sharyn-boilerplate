// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

import { muiTheme } from 'storybook-addon-material-ui'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { host } from 'storybook-host'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([
      { name: 'White', value: '#fff', default: true },
      { name: 'Gray', value: '#f2f2f2' },
    ]),
  )
  .addDecorator(muiTheme())
  .addDecorator(host({ align: 'center middle', backdrop: 'transparent' }))
  .add('Demo', () => <div>{text('Text', 'Demo')}</div>)
