import styled from 'styled-components';

export const StyledSquadList = styled.ul`
	list-style: none;
	margin: 5px 0;
	padding: 0;
	display: flex;
	justify-content: space-between;
`;

export const StyledSquadListItem = styled.li`
	background-color: ${props => props.backgroundColor};
	box-sizing: border-box;
	color: ${props => props.theme.colors.Blue};
	display: flex;
	flex-direction: column;
	height: 280px;
	align-items: center;
	justify-content: flex-start;
	padding 10px;
	margin: 5px;
	width: 15%;
`;

export const StyledImage = styled.img`
	align-self: center;
	width: 150px;
	height: 150px;
	margin: 0 0 -15px 0;
`;

export const StyledName = styled.h4`
	color: #fff;
	font-size: 0.9em;
	text-align: center;
	text-transform: uppercase;
	margin: 0;
`;

export const StyledSelectedMovesList = styled.ul`
	display: block;
	list-style: none;
	margin: 5px 0;
	padding: 0;
	width: 100%;
`;

export const StyledSelectedMovesListItem = styled.li`
	background-color: #fff;
	border: 1px solid ${props => props.theme.colors.Blue};
	border-radius: 3px;
	box-sizing: border-box;
	font-size: 0.9em;
	padding 3px;
	margin: 0 0 5px 0;
`;
