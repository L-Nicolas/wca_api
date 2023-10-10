import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'PlayerPosition',
  description: 'The possible position for a player.',
  values: {
    FORWARD : {
      value: 'FORWARD '
    },
    MIDFIELDER: {
      value: 'MIDFIELDER'
    },
    DEFENDER: {
      value: 'DEFENDER'
    },
    GOALKEEPER: {
        value: 'GOALKEEPER'
      }
  }
});
