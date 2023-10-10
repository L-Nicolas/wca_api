import database from '../database/'

const groupResolver = {
  Query: {
    groups: async () => {
      try {
        const { data, error } = await database.from('Groups').select('*')
        console.log('error')
        console.log(error)
        if (error) {
          throw new Error('Impossible de récupérer les groupes')
        }
        return data
      } catch (error) {
        throw new Error('Erreur lors de la récupération des groupes')
      }
    },
    group: async (_: any, { id }: any) => {
      try {
        const { data, error } = await database
          .from('groups')
          .select('*')
          .eq('id', id)
          .single()

        if (error) {
          throw new Error('Impossible de récupérer le groupe')
        }
        return data
      } catch (error) {
        throw new Error('Erreur lors de la récupération du groupe')
      }
    },
  },
}

export default groupResolver
