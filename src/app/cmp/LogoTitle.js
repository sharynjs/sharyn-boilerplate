// @flow

import Typography from '@material-ui/core/Typography'
import LogoIcon from '@material-ui/icons/ImportContacts'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

const LogoTitleJSX = ({ classes: css }: { classes: Object }) => (
  <Typography variant="display2">
    <LogoIcon className={css.logo} /> Notesapp
  </Typography>
)

export const LogoTitleCmp = withStyles(({ palette }) => ({
  logo: { fontSize: 45, verticalAlign: 'top', color: palette.primary.main },
}))(LogoTitleJSX)

const LogoTitle = LogoTitleCmp

export default LogoTitle
