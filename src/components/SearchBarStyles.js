import styled from 'styled-components';

export const StyledSearchBar = styled.div`
	flex-grow: 1;
	margin-right: 5px;
	min-width: 200px;
	max-width: 250px;
	max-height: 360px;
	overflow-y: hidden;
`;

export const StyledList = styled.ul`
	padding-left: 0;
	max-height: 265px;
	overflow-y: scroll;
`;

export const StyledListItem = styled.li`
	background-color: ${props => props.theme.colors.Blue};
	border-radius: 6px;
	color: ${props => props.theme.colors.Yellow};
	cursor: pointer;
	display: block;
	list-style: none;
	margin-top: 5px;
	padding: 6px 12px;
	text-transform: uppercase;
	&:hover {
		opacity: 0.9;
	}
`;

export const StyledTextInput = styled.input`
	border: 2px solid ${props => props.theme.colors.Blue};
	box-sizing: border-box;
	display: block;
	padding: 5px;
	width: 100%;
`;
