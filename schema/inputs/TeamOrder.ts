import { GraphQLInputObjectType } from 'graphql'
import OrderDirection from '../enums/OrderDirection'
import TeamOrderField from '../enums/TeamOrderField'

export default new GraphQLInputObjectType({
  name: 'TeamOrder',
  fields: {
    direction: {
      type: OrderDirection,
    },
    field: {
      type: TeamOrderField,
    },
  },
})
