import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DualRing } from 'react-awesome-spinners';
import styled from 'styled-components';

import { COLORS } from '../constants/colors';
import { StyledError } from './common/StyledError';
import { StyledLoader } from './common/StyledLoader';
import { GET_POKEMONS } from '../graphql';
import { SearchBar } from './SearchBar';
import { Details } from './Details';

const StyledSelectionContainer = styled.div`
	display: flex;
	margin-top: 20px;
	max-height: 360px;
	overflow-y: hidden;
`;

export function Selection({ onSave }) {
	const { loading, error, data } = useQuery(GET_POKEMONS);
	const [selectedPokemonName, selectPokemon] = useState();

	if (loading) {
		return <StyledLoader><DualRing color={COLORS.BLUE}/></StyledLoader>;
	}
	if (error) {
		return <StyledError>Error: something went wrong</StyledError>;
	}

	const availablePokemonNames = data.Pokemons.map(pokemon => pokemon.name) || [];

	return (
		<StyledSelectionContainer>
			<SearchBar pokemons={availablePokemonNames} onSelect={selectPokemon}/>
			<Details name={selectedPokemonName} onSave={(pokemon) => {
				selectPokemon(null);
				onSave(pokemon);
			}}/>
		</StyledSelectionContainer>
	);
};
