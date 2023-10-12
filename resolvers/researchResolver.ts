import database from '../database/'

const matchResolver = {
  Query: {
    filteredPlayersByName: async (_: any, { playerName }: { playerName: string }) => {
      try {
        const { data, error } = await database
          .from('Players')
          .select('*')
          .filter('name', 'ilike', `%${playerName}%`)

        if (error) {
          throw new Error('Impossible de récupérer les matchs')
        }

        return data.map((player) => ({
          id: player.id,
          name: player.name,
          goalsScored: player.goalsScored,
          assists: player.assists,
          yellowCards: player.yellowCards,
          redCards: player.redCards,
          team_id: player.team_id,
          position: player.position,
          photoURL: player.photoURL
        }))
      } catch (error) {
        throw new Error('Erreur lors de la récupération des matchs')
      }
    },
  },
}

export default matchResolver
