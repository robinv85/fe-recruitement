import React from 'react';

import { TYPE_COLORS } from '../constants/colors';
import { SectionTitle } from './common/SectionTitle';
import {
	StyledSquadList, StyledSquadListItem, StyledImage, StyledName, StyledSelectedMovesList,
	StyledSelectedMovesListItem
} from './SquadStyles';

function findColor(type) {
	const entry = Object.entries(TYPE_COLORS).find(([name]) => type === name.toLowerCase());
	return entry[1];
}

export function Squad({ pokemons }) {
	const count = pokemons.length;
	const placeholders = Array(6 - count).fill(null);
	const cardsToShow = pokemons.concat(placeholders);

	return (
		<div>
			<SectionTitle>Selected squad</SectionTitle>
			<StyledSquadList>
				{
					cardsToShow.map((card, i) => {
						if (!card) {
							return (
								<StyledSquadListItem key={i} backgroundColor="#ccc">
									empty
								</StyledSquadListItem>
							);
						}
						const { image, name, types, selectedMoves } = card;
						const type = types[0]?.name;
						return (
							<StyledSquadListItem key={i} backgroundColor={findColor(type)}>
								<StyledImage src={image}/>
								<StyledName>{name}</StyledName>
								<StyledSelectedMovesList>
									{
										selectedMoves.map(({ name }) => (
											<StyledSelectedMovesListItem key={name}>{name}</StyledSelectedMovesListItem>
										))
									}
								</StyledSelectedMovesList>
							</StyledSquadListItem>
						);
					})
				}
			</StyledSquadList>
		</div>
	);
}
