// @flow

import React from 'react'

import { connect as withRedux } from 'react-redux'
import compose from 'recompose/compose'
import LoadingPage from 'sharyn/components/LoadingPage'
import Page from 'sharyn/components/Page'
import renderIf from 'sharyn/hocs/render-if'
import withClientMainQuery from 'sharyn/hocs/with-client-main-query'

import NotFoundPage from 'error/cmp-page/NotFoundPage'
import Note from 'note/cmp/Note'

const NotePageJSX = ({ note, ...rest }: { note: Object }) => (
  <Page noPaper noPadding maxWidth={600}>
    <Note {...note} {...rest} showActions />
  </Page>
)

export const NotePageCmp = compose(
  renderIf(({ isPageLoading }) => isPageLoading, LoadingPage),
  renderIf(({ note }) => !note, NotFoundPage),
)(NotePageJSX)

const NotePage = compose(
  withRedux(({ data, async }) => ({ note: data.note, isPageLoading: async.page })),
  withClientMainQuery(),
)(NotePageCmp)

export default NotePage
