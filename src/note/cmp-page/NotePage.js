// @flow

import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import renderIf from 'sharyn/hocs/render-if'
import LoadingPage from 'sharyn/components/LoadingPage'
import withClientMainQuery from 'sharyn/hocs/with-client-main-query'
import Page from 'sharyn/components/Page'
import Note from 'note/cmp/Note'
import NotFoundPage from 'error/cmp-page/NotFoundPage'

const mstp = ({ data, async }) => ({ note: data.note, isPageLoading: async.page })

const NotePageJSX = ({ note, ...rest }: { note: Object }) => (
  <Page noPaper noPadding maxWidth={600}>
    <Note {...note} {...rest} showActions />
  </Page>
)

const NotePage = compose(
  connect(mstp),
  withClientMainQuery,
  renderIf(({ isPageLoading }) => isPageLoading, LoadingPage),
  renderIf(({ note }) => !note, NotFoundPage),
)(NotePageJSX)

export default NotePage
