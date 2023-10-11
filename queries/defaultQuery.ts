export default /* GraphQL */ `
  {
    groups {
      id
      name
      teams {
        id
      }
    }
    groups(orderBy: { field: NAME, direction: ASC }) {
      id
      name
      teams {
        id
      }
    }

    teams(orderBy: { field: RANK, direction: ASC }) {
      id
    }
    matchs {
      id
      teamA {
        name
        id
      }
      teamB {
        name
        id
      }
      teamAScore
      teamBScore
    }
  }
`
