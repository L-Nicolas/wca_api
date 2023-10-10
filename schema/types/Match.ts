import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql'
import Team from './Team'
import teamResolver from '../../resolvers/teamResolver'

export default new GraphQLObjectType({
  name: 'Match',
  fields: {
    id: {
      type: GraphQLID,
    },
    matchDay: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    teamA: {
      type: Team,
      resolve: (obj) => {
        if (!obj.teamA_id) return null
        return teamResolver.Query.team({ id: obj.teamA_id })
      },
    },
    teamB: {
      type: Team,
      resolve: (obj) => {
        if (!obj.teamB_id) return null
        return teamResolver.Query.team({ id: obj.teamB_id })
      },
    },
    teamAScore: {
      type: GraphQLInt,
    },
    teamBScore: {
      type: GraphQLInt,
    },
  },
})
