import React from 'react';
import styled from 'styled-components';

import rainIcon from '../assets/MainRainIcon.png';
import cloudsIcon from '../assets/MainCloudIcon.png';
import clearIcon from '../assets/MainClearIcon.png';
import windSpeedIcon from '../assets/WindSmallIcon.png';

interface Props {
	temperature: number;
	hour: number;
	windSpeed: number;
	weather: string;
}

const HourInfo = ({ temperature, hour, windSpeed, weather }: Props) => {
	const date = new Date(hour * 1000);
	let weatcherIcon = clearIcon;

	if (weather === 'Rain') {
		weatcherIcon = rainIcon;
	} else if (weather === 'Clouds') {
		weatcherIcon = cloudsIcon;
	} else {
		weatcherIcon = clearIcon;
	}

	return (
		<HourInfoContainer>
			<HourStyledP>{date.getHours()}:00</HourStyledP>
			<TempStyledP>{temperature.toFixed(0)}°C</TempStyledP>
			<SmallIconImg src={weatcherIcon} alt='' />
			<WindSpeedContainer>
				<img src={windSpeedIcon} alt='' />
				<p>{windSpeed} km/h</p>
			</WindSpeedContainer>
		</HourInfoContainer>
	);
};

const HourInfoContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(4, 4fr);
	row-gap: 4px;
	justify-items: center;
	align-items: center;
	min-height: 120px;
	max-height: 120px;
	min-width: 60px;
	max-width: 60px;

	background: rgba(255, 255, 255, 0.12);
	border-radius: 8px;
`;

const HourStyledP = styled.p`
	font-size: 12px;
`;
const TempStyledP = styled.p`
	font-size: 20px;
`;

const SmallIconImg = styled.img`
	height: 39px;
	width: 39px;
`;

const WindSpeedContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	& img {
		height: 12px;
		width: 12px;
	}

	& p {
		font-size: 8px;
	}
`;

export default HourInfo;
