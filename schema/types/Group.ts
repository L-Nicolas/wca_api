import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql'

import Team from './Team'
import teamResolver from '../../resolvers/teamResolver'

export default new GraphQLObjectType({
  name: 'Group',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    teams: {
      type: new GraphQLList(Team),
      resolve: (obj) => {
        if (obj.countrys_id.length == 0) return []
        const teams: Promise<{
          id: any
          name: any
          abbreviation: any
          flagURL: any
          photoURL: any
        }>[] = []

        obj.countrys_id.map((country_id: Number) => {
          const team = teamResolver.Query.team({ id: country_id })
          teams.push(team)
        })

        return teams
      },
    },
  },
})
