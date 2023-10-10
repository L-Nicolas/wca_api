import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
  } from 'graphql';
import Team from './Team';
import Group from './Group';
  
  export default new GraphQLObjectType({
    name: 'GroupTeam',
    fields: {
      id: {
        type: GraphQLID
      },
      team: {
        type: Team
      },
      group: {
        type: Group
        },
      points: {
        type: GraphQLInt
      },
    }
  });
  