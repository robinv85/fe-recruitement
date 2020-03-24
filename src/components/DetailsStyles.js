import styled from 'styled-components';

export const StyledMessage = styled.div`
	display: flex;
	font-size: 1.5em;
	justify-content: center;
	margin: 100px auto;
	color: ${props => props.theme.colors.Blue};
`;

export const StyledFlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: flex-start;
	margin: 0 10px;
`;

export const StyledDetails = styled.div`
	display: flex;
	flex-grow: 4;
`;

export const StyledMainColumn = styled.div`
	flex-grow: 2;
	max-width: 52%;
`;

export const StyledImage = styled.img`
	align-self: center;
	width: 150px;
	height: 150px;
	margin: 0;
`;

export const StyledName = styled.h2`
	color: ${props => props.theme.colors.Blue};
	margin: 0 auto;
	text-transform: uppercase;
`;

export const StyledButton = styled.button`
	background-color: ${props => props.theme.colors.Blue};
	color: #fff;
	cursor: pointer;
	font-family: italic;
	font-size: 1.1em;
	&:hover {
		opacity: 0.9;
	}
	padding: 5px;
	text-transform: uppercase;
`;

export const StyledStatList = styled.ul`
	display: block;
	list-style: none;
	margin: 0;
	padding: 0;
	text-align: right;
	text-transform: uppercase;
	width: 100%;
`;

export const StyledStatListItem = styled.li`
	box-sizing: border-box;
	display: inline-block;
	width: 48%;
	padding 10px 20px;
`;

export const StyledStatName = styled.span`
	font-size: 0.8em;
	color: ${props => props.theme.colors.Yellow};
`;

export const StyledStatValue = styled.span`
	color: ${props => props.theme.colors.Blue};
	font-size: 2em;
`;

export const StyledMainRow = styled.div`
	margin: 10px 0;
`;

export const StyledSmallTitle = styled.h4`
	color: ${props => props.theme.colors.Blue};
	font-size: 0.8em;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 0;
`;

export const StyledAvailableMovesListContainer = styled.div`
	overflow-y: scroll;
`;

export const StyledMoveMethod = styled(StyledSmallTitle)`
	color: ${props => props.theme.colors.Yellow};
	text-align: left;
	margin: 0;
`;

export const StyledSelectableMoveMethod = styled(StyledMoveMethod)`
	color: ${props => props.theme.colors.Yellow};
	cursor: pointer;
	display: inline-block;
	padding: 0 5px;
	text-align: center;
	&:hover, &.selected {
		text-decoration: underline;
	}
`;

export const StyledAvailableMovesList = styled.ul`
	list-style: none;
	margin: 5px 0 0 0;
	padding: 0;
`;

export const StyledAvailableMovesListItem = styled.li`
	box-sizing: border-box;
	color: ${props => props.theme.colors.Blue};
	cursor: pointer;
	padding 5px 0;
	text-transform: capitalize;
	&:hover {
		text-decoration: underline;
	}
`;

export const StyleSelectedMovesList = styled.ul`
	display: block;
	list-style: none;
	margin: 5px 0;
	padding: 0;
	width: 100%;
`;

export const StyledSelectedMovesListItem = styled.li`
	border: 1px solid ${props => props.theme.colors.Blue};
	box-sizing: border-box;
	color: ${props => props.theme.colors.Blue};
	cursor: pointer;
	display: inline-block;
	padding 5px;
	margin: 0 5px 5px 0;
	width: 47%;
	&:hover {
		background-color: ${props => props.theme.colors.Blue};
		color: #fff;
	}
`;
