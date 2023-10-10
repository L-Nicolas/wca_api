import { GraphQLInputObjectType } from 'graphql'
import OrderDirection from '../enums/OrderDirection'
import GroupOrderField from '../enums/GroupOrderField'

export default new GraphQLInputObjectType({
  name: 'GroupOrder',
  fields: {
    direction: {
      type: OrderDirection,
    },
    field: {
      type: GroupOrderField,
    },
  },
})
