import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import groupType from './Group'
import matchType from './Match'
import teamType from './Team'
import playerType from './Player'
import groupResolver from '../../resolvers/groupResolver'
import researchResolver from '../../resolvers/researchResolver'
import matchResolver from '../../resolvers/matchResolver'
import matchsSearchResolver from '../../resolvers/matchsResearchResolver'
import teamResolver from '../../resolvers/teamResolver'
import playerResolver from '../../resolvers/playerResolver'
import TeamOrder from '../inputs/TeamOrder'
import GroupOrder from '../inputs/GroupOrder'

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    groups: {
      type: new GraphQLList(groupType),
      args: {
        orderBy: {
          type: GroupOrder,
          defaultValue: { field: 'id', direction: 'ASC' },
        },
      },
      resolve: async (_, { orderBy }) => {
        return groupResolver.Query.groups({ orderBy: orderBy })
      },
    },
    matchs: {
      type: new GraphQLList(matchType),
      resolve: async () => {
        return matchResolver.Query.matchs()
      },
    },
    teams: {
      type: new GraphQLList(teamType),
      args: {
        orderBy: {
          type: TeamOrder,
          defaultValue: { field: 'id', direction: 'ASC' },
        },
      },
      resolve: async (_, { orderBy }) => {
        return teamResolver.Query.teams({ orderBy: orderBy })
      },
    },
    team: {
      type: teamType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, { id }) => {
        return teamResolver.Query.team({ id: id })
      },
    },
    player: {
      type: new GraphQLList(playerType),
      args: { team_id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, { team_id }) => {
        return playerResolver.Query.playersByIDTeam({ team_id: team_id })
      },
    },
    players: {
      type: new GraphQLList(playerType),
      args: { team_id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, { team_id }) => {
        return playerResolver.Query.playersByIDTeam({ team_id: team_id })
      },
    },
    filteredPlayersByName: {
      type: new GraphQLList(playerType),
      args: {
        playerName: { type: GraphQLString }, // Argument pour le nom du match
      },
      resolve: async (_, { playerName }) => {
        return researchResolver.Query.filteredPlayersByName(_, { playerName });
      },
    },
    filteredMatchsByName: {
      type: new GraphQLList(matchType),
      args: {
        teamName: { type: GraphQLString }, // Argument pour le nom du match
      },
      resolve: async (_, { teamName }) => {
        return matchsSearchResolver.Query.matchesByTeamName(_, { teamName });
      },
    }


  },
})

/* @ObjectType()
export class Group {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;
}
@ObjectType()
export class GetAllGroupsResponse {
  @Field(() => [Group])
  groups!: Group[];
}
@ObjectType()
export class GetGroupByIdResponse {
  @Field(() => Group, { nullable: true })
  group!: Group | null;
}
 */
