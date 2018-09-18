// @flow

import React from 'react'

import { noteRoute, editNoteRoute, deleteNoteRoute } from 'note/note-routes'
import { clearfix } from 'sharyn/css/util'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Clear'
import EditIcon from '@material-ui/icons/Edit'

const styles = ({ spacing, palette }) => ({
  note: { ...clearfix, padding: spacing.unit * 3, marginBottom: spacing.unit * 3 },
  title: { marginTop: 0 },
  buttonGroup: { float: 'right' },
  deleteForm: { display: 'inline-block' },
  delete: { background: 'none', border: 'none', cursor: 'pointer', color: palette.error.main },
})

type Props = {
  classes: Object,
  id: string,
  title: string,
  description?: string,
  useTitleLink?: boolean,
}

const NoteJSX = ({ classes: css, id, title, description, useTitleLink }: Props) => (
  <Paper className={css.note}>
    <h3 className={css.title}>
      {useTitleLink ? <Link to={noteRoute.path(id)}>{title}</Link> : title}
    </h3>
    {description && <p>{description}</p>}
    <div className={css.buttonGroup}>
      <IconButton component={Link} to={editNoteRoute.path(id)}>
        <EditIcon />
      </IconButton>
      <form method="post" action={deleteNoteRoute.path(id)} className={css.deleteForm}>
        <IconButton type="submit" className={css.delete}>
          <DeleteIcon />
        </IconButton>
      </form>
    </div>
  </Paper>
)

const Note = withStyles(styles)(NoteJSX)

export default Note
