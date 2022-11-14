import React from 'react';
import styled from 'styled-components';

import windIcon from '../assets/WindSmallIcon.png';
import presureIcon from '../assets/PressureSmallIcon.png';
import tearIcon from '../assets/TearSmallIcon.png';

const OtherStatsInfo = () => {
	return (
		<OtherStatsContainer>
			<div>
				<img src={windIcon} alt='Speed wind icon' />
				<p>19 km/h</p>
			</div>
			<div>
				<img src={presureIcon} alt='Speed wind icon' />
				<p>1014 hpa</p>
			</div>
			<div>
				<img src={tearIcon} alt='Speed wind icon' />
				<p>54 %</p>
			</div>
		</OtherStatsContainer>
	);
};

const OtherStatsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;

	height: 42px;
	width: 340px;
	margin-top: 16px;

	& div {
		display: flex;
		align-items: center;

		& img {
			height: 29px;
			width: 29px;
			margin-right: 5px;
		}
	}
`;

export default OtherStatsInfo;
