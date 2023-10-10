import { GraphQLEnumType } from 'graphql'

export default new GraphQLEnumType({
  name: 'GroupOrderField',
  description: 'The possible field for ordering groups.',
  values: {
    NAME: {
      value: 'name',
    },
  },
})
