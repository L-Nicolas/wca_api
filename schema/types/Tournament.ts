import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
  } from 'graphql';
  
  export default new GraphQLObjectType({
    name: 'Tournament',
    fields: {
      id: {
        type: GraphQLID
      },
      name: {
        type: GraphQLString
      },
      startDate: {
        type: GraphQLString
      },
      endDate: {
        type: GraphQLString
      },
      topScorer: {
        type: GraphQLInt
      }
    }
  });
  