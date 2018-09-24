// @flow

import React from 'react'

import isNull from 'lodash/isNull'
import omitBy from 'lodash/omitBy'
import { connect as withRedux } from 'react-redux'
import compose from 'recompose/compose'
import LoadingPage from 'sharyn/components/LoadingPage'
import Page from 'sharyn/components/Page'
import renderIf from 'sharyn/hocs/render-if'
import withClientMainQuery from 'sharyn/hocs/with-client-main-query'

import NotFoundPage from 'error/cmp-page/NotFoundPage'
import NoteForm from 'note/cmp/NoteForm'

const EditNotePageJSX = (props: Object) => (
  <Page maxWidth={600}>
    <NoteForm {...props} />
  </Page>
)

export const EditNotePageCmp = compose(
  renderIf(({ isPageLoading }) => isPageLoading, LoadingPage),
  renderIf(({ noteToEdit }) => !noteToEdit, NotFoundPage),
)(EditNotePageJSX)

const EditNotePage = compose(
  withRedux(({ data, async }) => ({
    noteToEdit: omitBy(data.note, isNull),
    isPageLoading: async.page,
  })),
  withClientMainQuery(),
)(EditNotePageCmp)

export default EditNotePage
