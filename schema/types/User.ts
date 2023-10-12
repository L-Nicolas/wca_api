import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
  } from 'graphql';
  
  export default new GraphQLObjectType({
    name: 'User',
    fields: {
      id: {
        type: GraphQLID
      },
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      created_teams: {
        type: new GraphQLList(GraphQLInt),
      },
      is_admin: {
        type: GraphQLBoolean
      }
    }
  });
  