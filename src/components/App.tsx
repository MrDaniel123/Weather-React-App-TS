import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import Header from './Header';
import MainWeatcherIcon from './MainWeatcherIcon';
import MainWeatcherInfo from './MainWeatcherInfo';
import OtherStatsInfo from './OtherStatsInfo';
import HourlyStats from './HourlyStats';
import DayForcast from './DayForcast';

import { GlobalStyle } from '../utils/GlobalCss';

interface CurrentWeatcherModel {
	// list: [{ main: { temp: number; temp_min: number; temp_max: number } }];
	list: any;
	city: { name: string };
}

const API_KEY = process.env.REACT_APP_WEATCHER_API_KEY;

function App() {
	const [dataIsLoading, setDataIsLoading] = useState(false);
	const [weatcherData, setWeatcherData] = useState<CurrentWeatcherModel | null>();
	const [fetchError, setFetchError] = useState(false);

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=legnica&appid=${API_KEY}&units=metric`
		)
			.then(response => {
				if (!response.ok) {
					throw new Error(`This is an HTTP error: The status is ${response.status}`);
				}
				setFetchError(false);

				return response.json();
			})
			.then(data => {
				setDataIsLoading(true);
				setWeatcherData(data);
			})
			.catch(err => {
				setFetchError(err.message);
				setWeatcherData(null);
			});
	}, []);

	return (
		//!Delete this brackets
		<>
			{dataIsLoading && (
				<>
					<GlobalStyle />
					<AppContainer>
						<Header cityName={weatcherData?.city.name} />
						<MainWeatcherIcon />
						<MainWeatcherInfo
							weatcherInformations={weatcherData?.list}
							cityName={weatcherData?.city.name}
						/>
						<Foo>
							<OtherStatsInfo />
							<Line />
							<HourlyStats />
							<Line />

							<DayForcast />
							<DayForcast />
							<DayForcast />
							<DayForcast />
						</Foo>
					</AppContainer>
				</>
			)}
		</>
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
