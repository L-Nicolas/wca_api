import { GraphQLEnumType } from 'graphql'

export default new GraphQLEnumType({
  name: 'TeamsOrderField',
  description: 'The possible field for ordering teams.',
  values: {
    RANK: {
      value: 'rank',
    },
  },
})
