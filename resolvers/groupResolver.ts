import database from '../database/'

const groupResolver = {
  Query: {
    groups: async ({ orderBy }: any) => {
      try {
        const { data, error } = await database
          .from('Groups')
          .select('*')
          .order(orderBy.field, { ascending: orderBy.direction === 'ASC' })

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
