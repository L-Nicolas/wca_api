import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from 'graphql'
import Team from './Team'

export default new GraphQLObjectType({
  name: 'Player',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLString,
    },
    goalsScored: {
      type: GraphQLInt,
    },
    assists: {
      type: GraphQLInt,
    },
    yellowCards: {
      type: GraphQLInt,
    },
    redCards: {
      type: GraphQLInt,
    },
    photoURL: {
      type: GraphQLString,
    },
    team: {
      type: Team,
    },
  },
})
