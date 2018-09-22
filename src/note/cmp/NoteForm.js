// @flow

import React from 'react'

import { connect as withRedux } from 'react-redux'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import ProgressButton from 'sharyn/components/ProgressButton'
import { validateNoteInput } from 'note/note-validations'
import { invalidateFields, clearInvalidFields } from 'sharyn/client/actions'
import { updateNoteCall, createNoteCall } from 'note/note-calls'
import { graphqlThunk } from 'sharyn/client/thunks'
import formData from 'sharyn/client/form-data'

type Props = {
  classes: Object,
  noteToEdit?: Object,
  isLoading?: boolean,
  onSubmit?: Function,
  previousFields?: Object,
  invalidFields?: Object[],
}

const NoteFormJSX = ({
  classes: css,
  noteToEdit,
  isLoading,
  onSubmit,
  previousFields = {},
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
        defaultValue={previousFields.title ?? noteToEdit?.title}
        error={!!invalidFields.find(inv => inv.name === 'title')}
        autoFocus
        required
      />
    </div>
    <div className={css.field}>
      <TextField
        label="Description"
        name="description"
        defaultValue={previousFields.description ?? noteToEdit?.description}
        fullWidth
      />
    </div>
    <ProgressButton {...{ isLoading }}>{noteToEdit ? 'Save' : 'Create note'}</ProgressButton>
  </form>
)

export const NoteFormCmp = withStyles(({ palette }) => ({
  field: { marginBottom: 15 },
  error: { marginBottom: 20, color: palette.error.main },
}))(NoteFormJSX)

const NoteForm = compose(
  withRedux(({ data, async }) => ({
    invalidFields: data.invalidFields,
    previousFields: data.previousFields,
    isLoading: async.noteForm,
  })),
  withHandlers({
    onSubmit: ({ noteToEdit, match, dispatch, routerHistory }) => e => {
      e.preventDefault()
      const fields = formData(e)
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
)(NoteFormCmp)

export default NoteForm
