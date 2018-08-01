// @flow

import Typography from '@material-ui/core/Typography'
import LogoIcon from '@material-ui/icons/ImportContacts'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

const styles = ({ palette }) => ({
  logo: { fontSize: 45, verticalAlign: 'top', color: palette.primary.main },
})

const LogoTitleJSX = ({ classes: css }: { classes: Object }) => (
  <Typography variant="display2">
    <LogoIcon className={css.logo} /> Notesapp
  </Typography>
)

const LogoTitle = withStyles(styles)(LogoTitleJSX)

export default LogoTitle
