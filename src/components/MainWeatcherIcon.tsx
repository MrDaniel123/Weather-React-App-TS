import React from 'react';
import styled from 'styled-components';

import mainRainIcon from '../assets/MainRainIcon.png';

const MainWeatcherIcon = () => {
	return <IconStyledImg src={mainRainIcon} alt='Weatcher Icon' />;
};

const IconStyledImg = styled.img`
	height: 158px;
	width: 186px;
`;

export default MainWeatcherIcon;
