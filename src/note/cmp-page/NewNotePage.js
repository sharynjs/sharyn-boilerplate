// @flow

import React from 'react'
import Page from 'sharyn/components/Page'

import NoteForm from 'note/cmp/NoteForm'

const NewNotePageJSX = (props: Object) => (
  <Page maxWidth={600}>
    <NoteForm {...props} />
  </Page>
)

const NewNotePage = NewNotePageJSX

export default NewNotePage
