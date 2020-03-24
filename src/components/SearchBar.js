import React, { useState } from 'react';

import { SectionTitle } from './common/SectionTitle';
import { StyledSearchBar, StyledList, StyledListItem, StyledTextInput } from './SearchBarStyles';

export function ListItem({ name, onClick }) {
	return (
		<StyledListItem onClick={onClick}>
			{name}
		</StyledListItem>
	);
}

export function PokemonList({ items = [], onSelect }) {
	return (
		<StyledList>
			{items.map(pokemonName => <ListItem key={pokemonName} name={pokemonName} onClick={() => onSelect(pokemonName)}/>)}
		</StyledList>
	);
}

export function SearchBar({ pokemons, onSelect }) {
	const [currentFilter, setFilter] = useState('');
	const filteredPokemonNames = currentFilter === ''
		? pokemons
		: pokemons.filter(name => name.includes(currentFilter));

	return (
		<StyledSearchBar>
			<SectionTitle>Select a Pokemon</SectionTitle>
			<StyledTextInput type="text" name="filter_pokemons" onChange={(val) => setFilter(val?.target?.value)}/>
			<PokemonList items={filteredPokemonNames} onSelect={onSelect}/>
		</StyledSearchBar>
	);
};
