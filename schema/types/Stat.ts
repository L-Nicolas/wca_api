import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt
  } from 'graphql';
  
  export default new GraphQLObjectType({
    name: 'Stat',
    fields: {
      id: {
        type: GraphQLID
      },
      totalGoals: {
        type: GraphQLInt
      },
      totalYellowCards: {
        type: GraphQLInt
      },
      totalRedCards: {
        type: GraphQLInt
      },
      totalAssists: {
        type: GraphQLInt
      }
    }
  });
  