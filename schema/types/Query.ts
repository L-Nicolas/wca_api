import { GraphQLList, GraphQLObjectType } from "graphql";
import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import groupType from "./Group";
import matchType from "./Match";
import teamType from "./Team";
import groupResolver from "../../resolvers/groupResolver";
import matchResolver from "../../resolvers/matchResolver";
import teamResolver from "../../resolvers/teamResolver";

export default new GraphQLObjectType({
  name: "Query",
  fields: {
    groups: {
      type: new GraphQLList(groupType),
      resolve: async () => {
        // TODO
        return groupResolver.Query.groups();
      },
    },
    matchs: {
      type: new GraphQLList(matchType),
      resolve: async () => {
        // TODO
        return matchResolver.Query.matchs();
      },
    },
    teams: {
      type: new GraphQLList(teamType),
      resolve: async () => {
        // TODO
        return teamResolver.Query.teams();
      },
    },
  },
});

@ObjectType()
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
