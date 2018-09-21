// @flow

import React from 'react'
import { noteRoute, editNoteRoute, deleteNoteRoute } from 'note/note-routes'
import { clearfix } from 'sharyn/css/util'
import { withStyles } from '@material-ui/core/styles'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { deleteNoteCall } from 'note/note-calls'
import { graphqlThunk } from 'sharyn/client/thunks'

const styles = ({ spacing }) => ({
  note: { ...clearfix, padding: spacing.unit * 3, marginBottom: spacing.unit * 3 },
  title: { margin: 0 },
  description: { marginTop: spacing.unit * 2 },
  buttonGroup: { float: 'right' },
  deleteForm: { display: 'inline-block' },
})

type Props = {
  classes: Object,
  id: string,
  title: string,
  description?: string,
  useTitleLink?: boolean,
  showActions?: boolean,
  onSubmit: Function,
}

const NoteJSX = ({
  classes: css,
  id,
  title,
  description,
  useTitleLink,
  showActions,
  onSubmit,
}: Props) => (
  <Paper className={css.note}>
    <h3 className={css.title}>
      {useTitleLink ? <Link to={noteRoute.path(id)}>{title}</Link> : title}
    </h3>
    {description && <div className={css.description}>{description}</div>}
    {showActions && (
      <div className={css.buttonGroup}>
        <IconButton component={Link} to={editNoteRoute.path(id)}>
          <EditIcon />
        </IconButton>
        <form
          method="post"
          action={deleteNoteRoute.path(id)}
          className={css.deleteForm}
          {...{ onSubmit }}
        >
          <IconButton type="submit">
            <DeleteIcon />
          </IconButton>
        </form>
      </div>
    )}
  </Paper>
)

const Note = compose(
  withHandlers({
    onSubmit: ({ id, dispatch, routerHistory }) => async e => {
      e.preventDefault()
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you really want to delete this note?')) {
        const fields = { id }
        dispatch(
          graphqlThunk({ ...deleteNoteCall, routerHistory, asyncKey: `deleteNote:${id}`, fields }),
        )
      }
    },
  }),
  withStyles(styles),
)(NoteJSX)

export default Note
