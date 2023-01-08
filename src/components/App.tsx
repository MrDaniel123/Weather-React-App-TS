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

interface ForcastDayWeather {
	dayName: string;
	minTemperature: number;
	maxTemperature: number;
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

	const daysName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const weatherDays: ForcastDayWeather[] = [];

	const weatherForDays = () => {
		const dayIndex: number[] = [];

		let dayName: string = '';
		let minTemperature: number = 0;
		let maxTemperature: number = 0;

		// let dayNumber: number[] = weatcherData?.list.map((element: any) => {
		// 	let date = new Date(element.dt * 1000);
		// 	return date.getDay();
		// });

		// const wearcherDaysNumber = dayNumber.filter((day, pos) => {
		// 	return dayNumber.indexOf(day) === pos;
		// });

		// for (let i = 0; i < wearcherDaysNumber.length; i++) {
		// 	let day = daysName[wearcherDaysNumber[i]];
		// 	dayName = day;
		// }

		const daysMonthNumber: number[] = weatcherData?.list.map((weatherStats: any) => {
			let date = new Date(weatherStats.dt * 1000);
			return date.getUTCDate();
		});

		daysMonthNumber.forEach((day, pos) => {
			if (daysMonthNumber.indexOf(day) === pos) {
				dayIndex.push(pos);
			}
		});

		dayIndex.forEach(dayIndex => {
			minTemperature = weatcherData?.list[dayIndex].main.temp_min;
			maxTemperature = weatcherData?.list[dayIndex].main.temp_max;

			let weatherTime = weatcherData?.list[dayIndex].dt;
			let dateObj = new Date(weatherTime);
			let dayNumber = dateObj.getDay();
			let day = daysName[dayNumber];

			const dayObj: ForcastDayWeather = {
				dayName: day,
				minTemperature: minTemperature,
				maxTemperature: maxTemperature,
			};

			weatherDays.push(dayObj);
		});

		console.log(weatherDays);
	};

	// const temperatureFilter = (numberOfActualListSearch: number) => {
	// 	const minTemperature: number[] = [];

	// 	if (numberOfActualListSearch === 0) {
	// 		for (let i = 0; i === numberOfActualListSearch; i++) {
	// 			minTemperature.push(weatcherData?.list[i].main.temp_min);
	// 		}
	// 	}

	// 	console.log(minTemperature);
	// };

	if (dataIsLoading) {
		weatherForDays();
		// console.log(weatcherData);
	}

	// const dayForcastRender = weatherDays.dayName.map(day => {
	// 	return <DayForcast weatcherDay={day} key={day} />;
	// });
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
							<OtherStatsInfo currentWeatcherData={weatcherData?.list[0]} />
							<Line />
							<HourlyStats weatcherInformations={weatcherData?.list} />
							<Line />

							{/* {dayForcastRender} */}
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
