import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import styled, { ThemeProvider } from "styled-components";

import client from "./graphql";
import { THEME } from "./constants/theme";
import { StateContainer } from "./components/StateContainer";

const LOGO_URL = "https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554";

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export default function App() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={THEME}>
				<Container>
					<Logo src={LOGO_URL} />
					<StateContainer />
				</Container>
			</ThemeProvider>
		</ApolloProvider>
	);
};
