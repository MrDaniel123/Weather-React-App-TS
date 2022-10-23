import React from 'react';

import styled, { keyframes } from 'styled-components';

import Header from './Header';
import MainWeatcherIcon from './MainWeatcherIcon';
import MainWeatcherInfo from './MainWeatcherInfo';
import OtherStatsInfo from './OtherStatsInfo';
import HourlyStats from './HourlyStats';
import DayForcast from './DayForcast';

import { GlobalStyle } from '../utils/GlobalCss';

function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header />
				<MainWeatcherIcon />
				<MainWeatcherInfo />

				<div>
					<OtherStatsInfo />
					<HourlyStats />
					<DayForcast />
				</div>
			</AppContainer>
		</>
	);
}

export default App;

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;

	background: linear-gradient(
		180deg,
		#6765b6 0%,
		#3230a9 0.01%,
		rgba(17, 43, 91, 0.833333) 27.08%,
		rgba(87, 35, 133, 0.928125) 64.06%,
		#810064 100%
	);
`;
