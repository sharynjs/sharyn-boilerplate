// @flow

import React from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import { withStyles } from '@material-ui/core/styles'
import withFields from 'sharyn/hocs/with-fields'
import TextField from '@material-ui/core/TextField'
import ProgressButton from 'sharyn/components/ProgressButton'
import { validateNoteInput } from 'note/note-validations'
import { invalidateFields, clearInvalidFields } from 'sharyn/client/actions'
import spread from 'sharyn/util/spread'
import { updateNoteCall, createNoteCall } from 'note/note-calls'
import { graphqlThunk } from 'sharyn/client/thunks'

const styles = ({ palette }) => ({
  field: { marginBottom: 15 },
  error: { marginBottom: 20, color: palette.error.main },
})

const mstp = ({ data, async }) => ({
  invalidFields: data.invalidFields,
  previousFields: data.previousFields,
  isLoading: async.noteForm,
})

type Props = {
  classes: Object,
  fields: Object,
  handleFieldChange: Function,
  onSubmit: Function,
  isLoading?: boolean,
  noteToEdit?: Object,
  invalidFields?: Object[],
}

const NoteFormJSX = ({
  classes: css,
  fields,
  handleFieldChange,
  onSubmit,
  noteToEdit,
  isLoading,
  invalidFields = [],
}: Props) => (
  <form method="post" {...{ onSubmit }}>
    {invalidFields.map(inv => (
      <div key={inv.message} data-test="new-note-error" className={css.error}>
        {inv.message}
      </div>
    ))}
    <div className={css.field}>
      <TextField
        label="Title"
        name="title"
        value={fields.title ?? ''}
        onChange={handleFieldChange}
        error={!!invalidFields.find(inv => inv.name === 'title')}
        autoFocus
        required
      />
    </div>
    <div className={css.field}>
      <TextField
        label="Description"
        name="description"
        value={fields.description ?? ''}
        onChange={handleFieldChange}
        fullWidth
      />
    </div>
    <ProgressButton {...{ isLoading }}>{noteToEdit ? 'Save' : 'Create note'}</ProgressButton>
  </form>
)

const NoteForm = compose(
  connect(mstp),
  withFields(({ noteToEdit, previousFields = {} }) =>
    spread({
      title: noteToEdit?.title,
      description: noteToEdit?.description,
      ...previousFields,
    }),
  ),
  withHandlers({
    onSubmit: ({ noteToEdit, match, fields, dispatch, routerHistory }) => e => {
      e.preventDefault()
      const invalidFields = validateNoteInput(fields)
      dispatch(invalidFields ? invalidateFields(invalidFields) : clearInvalidFields())
      if (!invalidFields) {
        dispatch(
          graphqlThunk({
            ...(noteToEdit ? updateNoteCall : createNoteCall),
            routerHistory,
            urlParams: match.params,
            asyncKey: 'noteForm',
            fields,
          }),
        )
      }
    },
  }),
  withStyles(styles),
)(NoteFormJSX)

export default NoteForm
