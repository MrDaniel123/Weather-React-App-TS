import React from 'react';
import styled from 'styled-components';

import HourInfo from './HourInfo';

import ArrowIcon from '../assets/ArrowIcon.png';

const HourlyStats = () => {
	return (
		<HourlyStatsContainer>
			<p>Today</p>
			<ActualDateP>Mar, 29</ActualDateP>
			<ScroolBarContainerDiv>
				<HourInfo />
				<HourInfo />
				<HourInfo />
				<HourInfo />
			</ScroolBarContainerDiv>
			<button>
				<img src={ArrowIcon} alt='' />
			</button>
		</HourlyStatsContainer>
	);
};

const HourlyStatsContainer = styled.div`
	display: grid;
	grid-template-columns: 80px 1fr 80px;
	grid-template-rows: 22px 1fr 16px;
	justify-items: center;
	align-items: center;
	font-weight: bold;

	width: 340px;
	height: 180px; //* to delete

	& button {
		all: unset;
		grid-column: 3/4;
		grid-row: 3/4;
		width: 48px;
		height: 12px;
		cursor: pointer;
	}
`;

const ActualDateP = styled.p`
	grid-column: 3/4;
`;

const ScroolBarContainerDiv = styled.div`
	grid-column: 1/4;
	grid-row: 2/3;
	display: flex;
	gap: 16px;
	overflow: scroll;
`;

export default HourlyStats;
