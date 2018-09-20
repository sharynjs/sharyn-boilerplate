// @flow

import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import Page from 'sharyn/components/Page'
import withClientMainQuery from 'sharyn/hocs/with-client-main-query'
import renderIf from 'sharyn/hocs/render-if'
import LoadingPage from 'sharyn/components/LoadingPage'
import NotFoundPage from 'error/cmp-page/NotFoundPage'

import NoteForm from 'note/cmp/NoteForm'

const mstp = ({ data, async }) => ({ noteToEdit: data.note, isPageLoading: async.page })

const EditNotePageJSX = (props: Object) => (
  <Page maxWidth={600}>
    <NoteForm {...props} />
  </Page>
)

const EditNotePage = compose(
  connect(mstp),
  withClientMainQuery,
  renderIf(({ isPageLoading }) => isPageLoading, LoadingPage),
  renderIf(({ noteToEdit }) => !noteToEdit, NotFoundPage),
)(EditNotePageJSX)

export default EditNotePage