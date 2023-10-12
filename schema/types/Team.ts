import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export default new GraphQLObjectType({
  name: "Team",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    abbreviation: {
      type: GraphQLString,
    },
    flagURL: {
      type: GraphQLString,
    },
    photoURL: {
      type: GraphQLString,
    },
  },
});
