import React, { useState } from 'react';
import { DualRing } from 'react-awesome-spinners';
import { useQuery } from '@apollo/react-hooks';

import { COLORS } from '../constants/colors';
import { StyledError } from './common/StyledError';
import { StyledLoader } from './common/StyledLoader';
import { GET_POKEMON_BY_NAME } from '../graphql';
import {
	StyledMessage,
	StyledFlexColumn,
	StyledDetails,
	StyledMainColumn,
	StyledImage,
	StyledName,
	StyledButton,
	StyledStatList,
	StyledStatListItem,
	StyledStatName,
	StyledStatValue,
	StyledMainRow,
	StyledSmallTitle,
	StyledMoveMethod,
	StyledAvailableMovesListContainer,
	StyledAvailableMovesList,
	StyledAvailableMovesListItem,
	StyleSelectedMovesList,
	StyledSelectedMovesListItem,
	StyledSelectableMoveMethod,
} from './DetailsStyles';

function reduceMovesByMethod(grouped, move) {
	const { learnMethod } = move;
	if (!grouped[learnMethod]) {
		grouped[learnMethod] = [];
	}
	grouped[learnMethod].push(move);
	return grouped;
}

export function Details({ name, onSave }) {
	const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, { variables: { name } });
	const [selectedMoves, setSelectedMoves] = useState([]);
	const [selectedMoveMethod, setSelectedMoveMethod] = useState();

	if (!name) {
		return <StyledMessage>Select a pokemon in the list on the left</StyledMessage>;
	}
	if (loading) {
		return <StyledLoader><DualRing color={COLORS.BLUE}/></StyledLoader>;
	}
	if (error) {
		return <StyledError>Error: something went wrong</StyledError>;
	}

	const { Pokemon: { image, types, stats, moves } } = data;
	const movesByMethod = moves.reduce(reduceMovesByMethod, {});
	if (!selectedMoveMethod) {
		const keys = Object.keys(movesByMethod);
		setSelectedMoveMethod(keys[0]);
	}

	return (
		<StyledDetails>
			<StyledFlexColumn>
				<StyledImage src={image}/>
				<StyledName>{name}</StyledName>
				<StyledButton onClick={() => {
					onSave({ name, image, selectedMoves, types });
					setSelectedMoveMethod(undefined);
					setSelectedMoves([]);
				}}>Save</StyledButton>
			</StyledFlexColumn>
			<StyledMainColumn>
				<StyledMainRow>
					<StyledSmallTitle>Stats</StyledSmallTitle>
					<StyledStatList>
						{
							stats.map(({ name, value }) => (
								<StyledStatListItem key={name}>
									<StyledStatName>{name}</StyledStatName> <StyledStatValue>{value}</StyledStatValue>
								</StyledStatListItem>
							))
						}
					</StyledStatList>
				</StyledMainRow>
				<StyledMainRow>
					<StyledSmallTitle>Selected moves</StyledSmallTitle>
					<StyleSelectedMovesList>
						{
							selectedMoves.map(move => {
								return (
									<StyledSelectedMovesListItem
										key={move.name}
										onClick={() => {
											const updatedMoves = selectedMoves.filter(selectedMove => selectedMove.name !== move.name);
											setSelectedMoves(updatedMoves);
										}}
									>
										<StyledMoveMethod>{move.learnMethod}</StyledMoveMethod>
										{move.name}
									</StyledSelectedMovesListItem>
								);
							})
						}
					</StyleSelectedMovesList>
				</StyledMainRow>
			</StyledMainColumn>
			<StyledFlexColumn>
				<StyledAvailableMovesListContainer>
					{
						Object.keys(movesByMethod).map(methodName => (
							<StyledSelectableMoveMethod
								onClick={() => setSelectedMoveMethod(methodName)}
								className={methodName === selectedMoveMethod && 'selected'}
								key={methodName}
							>
								{methodName}
							</StyledSelectableMoveMethod>
						))
					}
					<StyledAvailableMovesList>
						{
							movesByMethod[selectedMoveMethod]?.map((move) => (
								<StyledAvailableMovesListItem
									onClick={() => {
										if (selectedMoves.length >= 4) return;
										const moveSelected = selectedMoves.find(selectedMove => selectedMove.name === move.name);
										if (!moveSelected) {
											setSelectedMoves([...selectedMoves, move]);
										}
									}}
									key={move.name}
								>
									{move.name}
								</StyledAvailableMovesListItem>
							))
						}
					</StyledAvailableMovesList>
				</StyledAvailableMovesListContainer>
			</StyledFlexColumn>
		</StyledDetails>
	);
}
