import { GraphQLEnumType } from 'graphql'

export default new GraphQLEnumType({
  name: 'PlayerPosition',
  description: 'The possible position for a player.',
  values: {
    Attaquant: {
      value: 'Attaquant',
    },
    'Milieu de terrain': {
      value: 'Milieu de terrain',
    },
    Défenseur: {
      value: 'Défenseur',
    },
    'Gardien de but': {
      value: 'Gardien de but',
    },
  },
})
