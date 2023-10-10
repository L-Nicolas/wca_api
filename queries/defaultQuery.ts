export default /* GraphQL */ `
  {
    groups {
      id
      name
      teams {
        id
      }
    }
    teams(orderBy: { field: RANK, direction: ASC }) {
      id
    }
  }
`
