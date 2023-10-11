import database from '../database/'

const matchResolver = {
  Query: {
    matchs: async () => {
      try {
        const { data, error } = await database.from('Matchs').select('*')
        if (error) {
          throw new Error('Impossible de récupérer les matchs')
        }
        return data.map((match) => ({
          id: match.id,
          matchDay: match.date,
          location: match.location,
          teamA_id: match.teamA_id,
          teamB_id: match.teamB_id,
          teamAScore: match.teamAScore,
          teamBScore: match.teamBScore,
        }))
      } catch (error) {
        throw new Error('Erreur lors de la récupération des matchs')
      }
    },
  },
}

export default matchResolver
