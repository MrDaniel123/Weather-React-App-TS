import React from 'react';
import styled from 'styled-components';

import rainIcon from '../assets/MainRainIcon.png';

interface Props {
	day: string;
	minTemp: number;
	maxTemp: number;
}

const DayForcast = ({ day, minTemp, maxTemp }: Props) => {
	return (
		<DayForcastContainer>
			<DayNameStyledP>{day}</DayNameStyledP>
			<IconStyledImg src={rainIcon} alt='' />
			<MinTempStyledP>{minTemp}°C</MinTempStyledP>
			<MaxTempStyledP>{maxTemp}°C</MaxTempStyledP>
		</DayForcastContainer>
	);
};

const DayForcastContainer = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-around;
	width: 320px;
	height: 50px;
	font-weight: bold;

	background: rgba(255, 255, 255, 0.12);
	border-radius: 8px;
`;

const DayNameStyledP = styled.p`
	font-size: 20px;
`;

const IconStyledImg = styled.img`
	height: 33px;
	width: 33px;
`;

const MinTempStyledP = styled.p`
	font-size: 20px;
	color: #a7baff;
`;

const MaxTempStyledP = styled.p`
	font-size: 20px;
	color: #ff8484;
`;

export default DayForcast;
