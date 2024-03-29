import React, { useState } from 'react';

import styled from 'styled-components';

import useWeather from '../hooks/useWeather';
import { getWeatherForDays } from '../utils/getWeatherForDay';

import Header from './Header';
import MainWeatcherIcon from './MainWeatcherIcon';
import MainWeatcherInfo from './MainWeatcherInfo';
import OtherStatsInfo from './OtherStatsInfo';
import HourlyStats from './HourlyStats';
import DayForcast from './DayForcast';
import LoadingData from './LoadingData';

import { DayForcastType } from '../types/index';

import { GlobalStyle } from '../utils/GlobalCss';

function App() {
	const [weatherForDays, setweatherForDays] = useState<DayForcastType[]>([]);
	const { dataIsLoading, weatcherData } = useWeather('legnica');

	if (dataIsLoading) {
		if (weatherForDays.length === 0) {
			setweatherForDays(getWeatherForDays(weatcherData));
		}
	}

	const dayForcastRender = weatherForDays.map((day: DayForcastType) => {
		return <DayForcast {...day} />;
	});

	return (
		//!Delete this brackets
		<AppContainer>
			{dataIsLoading ? (
				<>
					<GlobalStyle />

					<Header cityName={weatcherData.city.name} />
					<MainWeatcherIcon />
					<MainWeatcherInfo
						weatcherInformations={weatcherData.list}
						cityName={weatcherData.city.name}
					/>
					<Foo>
						<OtherStatsInfo currentWeatcherData={weatcherData.list[0]} />
						<Line />
						<HourlyStats weatcherInformations={weatcherData.list} />
						<Line />
						{dayForcastRender}
					</Foo>
				</>
			) : (
				<LoadingData />
			)}
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	row-gap: 32px;
	width: 100vw;

	background: linear-gradient(
		180deg,
		#6765b6 0%,
		#3230a9 0.01%,
		rgba(17, 43, 91, 0.833333) 27.08%,
		rgba(87, 35, 133, 0.928125) 64.06%,
		#810064 100%
	);
`;
//ToDO CHange name this container
const Foo = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
	gap: 16px;
	position: relative;
	width: 100%;
	height: auto;
	padding-bottom: 80px;

	background: rgba(41, 0, 94, 0.63);
	border-radius: 26px 26px 0px 0px;

	&::after {
		display: block;
		content: '';
		position: absolute;
		top: 5px;
		left: calc(50% - 30px);
		z-index: 4;
		height: 4px;
		width: 60px;

		background: linear-gradient(270deg, #a57bff 0%, #c02194 100%);
		border-radius: 9px;
	}
`;

const Line = styled.span`
	width: 340px;
	height: 4px;

	background: linear-gradient(270deg, #4b0277 0%, #ffffff 48.44%, #2c2157 100%);
	border-radius: 7px;
`;
