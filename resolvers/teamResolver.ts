import database from '../database'

const teamResolver = {
  Query: {
    teams: async ({ orderBy }: any) => {
      try {
        const { data, error } = await database
          .from('Teams')
          .select('*')
          .order(orderBy.field, { ascending: orderBy.direction === 'ASC' })

        if (error) {
          throw new Error('Impossible de récupérer les teams')
        }
        return data.map((team) => ({
          id: team.id,
          name: team.name,
          abbreviation: team.abbreviation,
          flagURL: team.flagURL,
          photoURL: team.photoURL,
        }))
      } catch (error) {
        throw new Error('Erreur lors de la récupération des teams')
      }
    },
    team: async ({ id }: any) => {
      try {
        const { data, error } = await database
          .from('Teams')
          .select('*')
          .eq('id', id)
          .single()
        if (error) {
          throw new Error('Impossible de récupérer la team')
        }
        return {
          id: data.id,
          name: data.name,
          abbreviation: data.abbreviation,
          flagURL: data.flagURL,
          photoURL: data.photoURL,
        }
      } catch (error) {
        throw new Error('Erreur lors de la récupération de la team')
      }
    },
  },
}

export default teamResolver
