// @flow

import React from 'react'
import { connect } from 'react-redux'
import Page from 'sharyn/components/Page'

import NoteForm from 'note/cmp/NoteForm'

const mstp = ({ data }) => ({ editFields: data.note })

const EditNotePageJSX = ({ editFields }: { editFields: ?Object }) => (
  <Page maxWidth={600}>
    <NoteForm {...{ editFields }} isEdit />
  </Page>
)

const EditNotePage = connect(mstp)(EditNotePageJSX)

export default EditNotePage
