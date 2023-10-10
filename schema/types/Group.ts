import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import Team from "./Team";
import teamResolver from "../../resolvers/teamResolver";

export default new GraphQLObjectType({
  name: "Group",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    team: {
      type: Team,
      resolve: (obj) => {
        if (!obj.team_id) return null;
        return teamResolver.Query.team(null, { id: obj.team_id });
      },
    },
  },
});
