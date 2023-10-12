import internal from 'stream';
import database from '../database/'

const playerResolver = {
  Mutation: {
    createPlayer: async ({ name, goalsScored, assists, yellowCards, redCards, photoURL, team_id, position}:
      { name: string, goalsScored: number , assists: number, yellowCards: number, redCards : number, photoURL: string, team_id : number, position:string}) => {
      const { data, error } = await database.from('Players').upsert([
        {
          name, goalsScored, assists, yellowCards, redCards, photoURL, team_id, position
        },
      ]);
      if (error) {
        throw new Error('Échec de la création du joueur ' + error.message);
      }
      return data[0];
    },
  },

  Query: {
    players: async () => {
      try {
        const { data, error } = await database.from('Players').select('*')
        if (error) {
          throw new Error('Impossible de récupérer les players')
        }
        return data.map((player) => ({
          id: player.id,
          name: player.name,
          team: player.team,
          position: player.position,
          goalsScored: player.goalsScored,
          assists: player.assists,
          yellowCards: player.yellowCards,
          redCards: player.redCards,
          photoURL: player.photoURL,
        }))
      } catch (error) {
        throw new Error('Erreur lors de la récupération des players')
      }
    },
    playersByIDTeam: async ({ team_id }: any) => {
      try {
        const { data, error } = await database
          .from('Players')
          .select('*')
          .eq('team_id', team_id)
        if (error) {
          throw new Error('Impossible de récupérer les players')
        }

        return data.map((player) => ({
          id: player.id,
          name: player.name,
          team: player.team,
          position: player.position,
          goalsScored: player.goalsScored,
          assists: player.assists,
          yellowCards: player.yellowCards,
          redCards: player.redCards,
          photoURL: player.photoURL,
        }))
      } catch (error) {
        throw new Error('Erreur lors de la récupération des players')
      }
    },
  },
}

export default playerResolver
