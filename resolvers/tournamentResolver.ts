import database from "../database/";

const tournamentResolver = {
    Query: {
        tournament: async () => {
        try {
          const { data, error } = await database.from('Tournament').select('*');
          if (error) {
            throw new Error('Impossible de récupérer le tournament');
          }
          return data.map((tournament) => ({
            id: tournament.id,
            name: tournament.name,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            topScorer: tournament.topScorer
          }));
          
        } catch (error) {
          throw new Error('Erreur lors de la récupération du tournament');
        }
      },
    },
  };
  
  export default tournamentResolver;
  