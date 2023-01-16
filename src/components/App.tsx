import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import Header from './Header';
import MainWeatcherIcon from './MainWeatcherIcon';
import MainWeatcherInfo from './MainWeatcherInfo';
import OtherStatsInfo from './OtherStatsInfo';
import HourlyStats from './HourlyStats';
import DayForcast from './DayForcast';

import { CurrencyWeather, emptyCurrencyWeather, DayForcastType } from '../types/index';

import { GlobalStyle } from '../utils/GlobalCss';
import { type } from '@testing-library/user-event/dist/type';

const API_KEY = process.env.REACT_APP_WEATCHER_API_KEY;

function App() {
	const [dataIsLoading, setDataIsLoading] = useState(false);
	const [weatcherData, setWeatcherData] = useState<CurrencyWeather>(emptyCurrencyWeather);
	const [fetchError, setFetchError] = useState(false);
	const [dataStats, setDataStats] = useState<DayForcastType[]>([]);

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
				setWeatcherData(emptyCurrencyWeather);
			});
	}, []);

	const daysName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	const weatherForDays = () => {
		const dayIndex: number[] = [];
		let weatherDataForDays: any = []; //THis is weatcher for days One element is one day
		let counter = 0;

		const daysMonthNumber: any = weatcherData?.list.map((weatherStats: any) => {
			let date = new Date(weatherStats.dt * 1000);
			return date.getUTCDate();
		});

		daysMonthNumber.forEach((day: any, pos: any) => {
			if (daysMonthNumber.indexOf(day) === pos) {
				dayIndex.push(pos);
			}
		});

		dayIndex.forEach(index => {
			if (index !== 0) {
				let weatherData = weatcherData?.list.slice(counter, index);
				counter = index;
				weatherDataForDays.push(weatherData);
			}
		});

		///____________________________

		let weatherForDay = weatherDataForDays.map((oneDayWeather: any) => {
			let oneDayMinTemperature = oneDayWeather.map((oneHourWeather: any) => {
				let minTemp = oneHourWeather.main.temp_min;
				return minTemp;
			});

			let oneDayMaxTemperature = oneDayWeather.map((oneHourWeather: any) => {
				let maxTemp = oneHourWeather.main.temp_max;
				return maxTemp;
			});

			let dayName = oneDayWeather.map((oneHourWeather: any) => {
				let time = oneHourWeather.dt;
				let date = new Date(time * 1000);
				let dayNumber = date.getDay();
				// console.log(dayNumber);

				return daysName[dayNumber];
			});

			let weatherOneDayObj = {
				day: dayName[0],
				minTemp: Math.min(...oneDayMinTemperature),
				maxTemp: Math.max(...oneDayMaxTemperature),
			};
			return weatherOneDayObj;
		});

		setDataStats(weatherForDay);
	};

	if (dataIsLoading) {
		if (dataStats.length === 0) {
			weatherForDays();
		}
	}

	const dayForcastRender = dataStats.map((day: DayForcastType) => {
		return <DayForcast {...day} />;
	});

	return (
		//!Delete this brackets
		<>
			{dataIsLoading && (
				<>
					<GlobalStyle />
					<AppContainer>
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
