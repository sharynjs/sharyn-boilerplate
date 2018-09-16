// @flow

import React from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import { withStyles } from '@material-ui/core/styles'
import withFields from 'sharyn/hocs/with-fields'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import formData from 'sharyn/client/form-data'
import { validateNoteInput } from 'note/note-validations'
import { invalidateFields, clearInvalidFields } from 'sharyn/client/actions'

const styles = ({ palette }) => ({
  fieldsContainer: { marginBottom: 20 },
  error: { margin: '20px 0', color: palette.error.main },
})

const mstp = ({ data }) => ({
  invalidFields: data.invalidFields,
  previousFields: data.previousFields,
})

type Props = {
  classes: Object,
  fields: Object,
  setField: Function,
  onSubmit: Function,
  isEdit?: boolean,
  invalidFields?: Object[],
  previousFields?: Object,
}

const NoteFormJSX = ({
  classes: css,
  fields,
  setField,
  onSubmit,
  previousFields = {},
  invalidFields = [],
  isEdit,
}: Props) => (
  <form method="post" {...{ onSubmit }}>
    {invalidFields.map(inv => (
      <div key={inv.message} data-test="new-note-error" className={css.error}>
        {inv.message}
      </div>
    ))}
    <div className={css.fieldsContainer}>
      <TextField
        error={!!invalidFields.find(i => i.name === 'title')}
        label="Title"
        name="title"
        value={fields.title ?? previousFields?.title ?? ''}
        onChange={setField}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={fields.description ?? previousFields?.description ?? ''}
        fullWidth
        multiline
        onChange={setField}
      />
    </div>
    <Button variant="raised" color="primary" type="submit">
      {isEdit ? 'Save' : 'Create note'}
    </Button>
  </form>
)

const NoteForm = compose(
  withFields,
  connect(mstp),
  withHandlers({
    onSubmit: ({ dispatch }) => e => {
      e.preventDefault()
      const invalidFields = validateNoteInput(formData(e))
      dispatch(invalidFields ? invalidateFields(invalidFields) : clearInvalidFields())
    },
  }),
  withStyles(styles),
)(NoteFormJSX)

export default NoteForm
