import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
  } from 'graphql';
import Team from './Team';
  
  export default new GraphQLObjectType({
    name: 'Match',
    fields: {
      id: {
        type: GraphQLID
      },
      matchDay: {
        type: GraphQLString
      },
      location: {
        type: GraphQLString
      },
      teamA: {
        type: Team
      },
      teamB: {
        type: Team
      },
      teamAScore: {
        type: GraphQLInt
      },
      teamBScore: {
        type: GraphQLInt
      }
    }
  });
  