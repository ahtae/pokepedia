import gql from 'graphql-tag';

const GET_POKEMON = gql`
  query pokemon($name: String, $id: String) {
    pokemon(name: $name, id: $id) {
      name
      image
      maxHP
      maxCP
      types
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      fleeRate
      attacks {
        special {
          name
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;

export default GET_POKEMON;
