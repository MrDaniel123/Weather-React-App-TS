import React from 'react';
import styled from 'styled-components';

import rainIcon from '../assets/MainRainIcon.png';
import windSpeedIcon from '../assets/WindSmallIcon.png';

const HourInfo = () => {
	return (
		<HourInfoContainer>
			<HourStyledP>12:00</HourStyledP>
			<TempStyledP>17°</TempStyledP>
			<SmallIconImg src={rainIcon} alt='' />
			<WindSpeedContainer>
				<img src={windSpeedIcon} alt='' />
				<p>7.5 km/h</p>
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
	height: 120px;
	width: 70px;

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
