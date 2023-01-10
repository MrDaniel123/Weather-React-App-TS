import React from 'react';

import styled from 'styled-components';

interface Props {
	weatcherInformations: [{ main: { temp: number; temp_min: number; temp_max: number } }];
	cityName: string | undefined;
}

const MainWeatcherInfo = ({ weatcherInformations, cityName }: Props) => {
	const minTemperatureGenerator = () => {
		let minTemperaturesPerDay = [];

		for (let i = 0; i < 10; i++) {
			minTemperaturesPerDay.push(Number(weatcherInformations[i].main.temp_min));
		}

		minTemperaturesPerDay.sort(function (a: number, b: number) {
			return a - b;
		});
		return minTemperaturesPerDay[0];
	};

	const maxTemperatureGenerator = () => {
		let maxTemperaturesPerDay = [];

		for (let i = 0; i < 10; i++) {
			maxTemperaturesPerDay.push(Number(weatcherInformations[i].main.temp_max));
		}

		maxTemperaturesPerDay.sort(function (a: number, b: number) {
			return a - b;
		});

		return maxTemperaturesPerDay[maxTemperaturesPerDay.length - 1];
	};

	return (
		//ToDO Max min problem is not a temperature for all day Is only to 3 hour
		<MainWeatcherInfoContainer>
			<ActualTemperatureP>{weatcherInformations[0].main.temp.toFixed(0)}°C</ActualTemperatureP>
			<ActualCityNameP>{cityName}</ActualCityNameP>
			<MaxTemperatureP>Max: {Math.round(maxTemperatureGenerator())}°C</MaxTemperatureP>
			<MinTemperatureP>Min: {Math.round(minTemperatureGenerator())}°C</MinTemperatureP>
		</MainWeatcherInfoContainer>
	);
};

const MainWeatcherInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 15px 100px 36px 1fr;
	align-items: center;
	justify-items: center;
	width: 240px;
	height: 200px;

	background: rgba(41, 0, 94, 0.21);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.47), inset 0px 0px 11px rgba(0, 0, 0, 0.66);
	border-radius: 35px;
`;

const ActualTemperatureP = styled.p`
	grid-column: 1/3;
	grid-row: 2/3;

	font-weight: bold;
	font-size: 70px;

	text-shadow: 13px 4px 8px rgba(0, 0, 0, 0.25);
`;

const ActualCityNameP = styled.p`
	grid-column: 1/3;
	grid-row: 3/4;

	font-size: 16px;
	font-weight: bold;

	text-transform: uppercase;
`;

const MinTemperatureP = styled.p`
	grid-column: 1/2;
	grid-row: 4/5;
	font-size: 16px;
	font-weight: bold;
`;

const MaxTemperatureP = styled.p`
	grid-column: 2/2;
	grid-row: 4/5;
	font-size: 16px;
	font-weight: bold;
`;

export default MainWeatcherInfo;
