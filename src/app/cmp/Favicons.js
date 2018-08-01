// @flow

import React from 'react'

import { primaryColor } from 'app/theme'

const FAVICON_PATH = '/static/img/favicon'

const Favicons = [
  <link
    key="apple-touch-icon"
    rel="apple-touch-icon"
    sizes="180x180"
    href={`${FAVICON_PATH}/apple-touch-icon.png`}
  />,
  <link
    key="favicon-32"
    rel="icon"
    type="image/png"
    sizes="32x32"
    href={`${FAVICON_PATH}/favicon-32x32.png`}
  />,
  <link
    key="favicon-16"
    rel="icon"
    type="image/png"
    sizes="16x16"
    href={`${FAVICON_PATH}/favicon-16x16.png`}
  />,
  <link key="manifest" rel="manifest" href="/static/site.webmanifest" />,
  <link
    key="safari-pinned"
    rel="mask-icon"
    href={`${FAVICON_PATH}/safari-pinned-tab.svg`}
    color={primaryColor}
  />,
  <meta key="ms-tile" name="msapplication-TileColor" content={primaryColor} />,
  <meta key="theme" name="theme-color" content="#ffffff" />,
]

export default Favicons
