import ApolloClient from "apollo-boost";
import gql from 'graphql-tag';

export default new ApolloClient({
  uri: process.env.REACT_APP_POKE_ENDPOINT
});

// const DEFAULT_POKE_COUNT = 151;

export const GET_POKEMONS = gql`
	{
		Pokemons(first: 151) {
			name
		}
	}
`;

export const GET_POKEMON_BY_NAME = gql`
	query Pokemon($name: String!) {
		Pokemon(name: $name) {
			name,
			image,
			types {
				name,
			},
			moves, {
				name,
				type,
				learnMethod,
			},
			stats {
				name,
				value,
			},
		}
	}
`;
