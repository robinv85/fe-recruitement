import { Selection } from './Selection';
import { Squad } from './Squad';
import React, { useState } from 'react';

export function StateContainer() {
	const [selectedPokemons, setSelectedPokemons] = useState([]);

	return (
		<>
			<Selection onSave={(selectedPokemon) => {
				if (selectedPokemons.length <= 5) {
					setSelectedPokemons([...selectedPokemons, selectedPokemon]);
				}
			}}/>
			<Squad pokemons={selectedPokemons}/>
		</>
	);
}
