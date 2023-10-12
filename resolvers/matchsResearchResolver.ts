import database from '../database/';

const matchResolver = {
  Query: {
    matchesByTeamName: async (_: any, { teamName }: { teamName: string }) => {
      try {
        // Recherche de l'équipe en fonction du nom donné
        const { data: teamData, error: teamError } = await database
          .from('Teams')
          .select('id')
          .filter('name', 'ilike', `%${teamName}%`);

        if (teamError) {
          throw new Error('Impossible de récupérer les détails de l\'équipe');
        }

        if (teamData.length === 0) {
          throw new Error('L\'équipe n\'existe pas');
        }

        const teamId = teamData[0].id;

        // Recherche des matchs où l'équipe est soit teamA soit teamB
        const { data: matchData, error: matchError } = await database
          .from('Matchs')
          .select('*')
          .in('teamA_id', [teamId])

        if (matchError) {
          throw new Error('Impossible de récupérer les matchs');
        }

        const { data: matchData2, error: matchError2 } = await database
          .from('Matchs')
          .select('*')
          .in('teamB_id', [teamId])

        if (matchError) {
          throw new Error('Impossible de récupérer les matchs');
        }


        const transformedData = matchData.map((match) => ({
          id: match.id,
          matchDay: match.date,
          location: match.location,
          teamA_id: match.teamA_id,
          teamB_id: match.teamB_id,
          teamAScore: match.teamAScore,
          teamBScore: match.teamBScore,
        }));

        const transformedData2 = matchData2!.map((match) => ({
            id: match.id,
            matchDay: match.date,
            location: match.location,
            teamA_id: match.teamA_id,
            teamB_id: match.teamB_id,
            teamAScore: match.teamAScore,
            teamBScore: match.teamBScore,
        }));


        const mergedData = transformedData.concat(transformedData2);

        return mergedData;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des matchs');
      }
    },
  },
};

export default matchResolver;
