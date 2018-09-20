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
import DeleteIcon from '@material-ui/icons/Clear'
import EditIcon from '@material-ui/icons/Edit'
import { deleteNoteCall } from 'note/note-calls'
import { graphqlThunk } from 'sharyn/client/thunks'

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
  onSubmit: Function,
}

const NoteJSX = ({ classes: css, id, title, description, useTitleLink, onSubmit }: Props) => (
  <Paper className={css.note}>
    <h3 className={css.title}>
      {useTitleLink ? <Link to={noteRoute.path(id)}>{title}</Link> : title}
    </h3>
    {description && <p>{description}</p>}
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
        <IconButton type="submit" className={css.delete}>
          <DeleteIcon />
        </IconButton>
      </form>
    </div>
  </Paper>
)

const Note = compose(
  withHandlers({
    onSubmit: ({ id, dispatch, routerHistory }) => async e => {
      e.preventDefault()
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you really want to delete this note?')) {
        const call = deleteNoteCall
        const fields = { id }
        const data = await dispatch(graphqlThunk({ ...call, asyncKey: `deleteNote:${id}`, fields }))
        if (!data.errors && !data.invalidFields && call.successRedirect) {
          routerHistory.push(
            call.successRedirect instanceof Function
              ? call.successRedirect(data, fields)
              : call.successRedirect,
          )
        }
      }
    },
  }),
  withStyles(styles),
)(NoteJSX)

export default Note
