// @flow

import { typeDef as Note, resolvers as noteResolvers } from 'note/note-api'

const apolloConfig = {
  typeDefs: [Note],
  resolvers: noteResolvers,
  context: ({ ctx }: Object) => ctx,
}

export default apolloConfig
