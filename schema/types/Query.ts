import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql'
import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import groupType from './Group'
import matchType from './Match'
import teamType from './Team'
import playerType from './Player'
import groupResolver from '../../resolvers/groupResolver'
import matchResolver from '../../resolvers/matchResolver'
import teamResolver from '../../resolvers/teamResolver'
import playerResolver from '../../resolvers/playerResolver'

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    groups: {
      type: new GraphQLList(groupType),
      resolve: async () => {
        return groupResolver.Query.groups()
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
      resolve: async () => {
        return teamResolver.Query.teams()
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
