import React from 'react';

import styled from 'styled-components';

import menueIcon from '../assets/MenueIcon.png';
import locationIcon from '../assets/LocationIcon.png';
import locationIconButton from '../assets/LcationButtonIcon.png';

type Props = {
	cityName: string | undefined;
};

const Header = ({ cityName }: Props) => {
	return (
		<HeaderContainer>
			<button>
				<img src={locationIcon} alt='Chose location' />
				<p>{cityName}</p>
				<img src={locationIconButton} alt='' />
			</button>
			<button>
				<img src={menueIcon} alt='Menue' />
			</button>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 45px;

	background: linear-gradient(91.28deg, rgba(57, 4, 70, 0.58) 5.92%, rgba(91, 1, 162, 0.58) 98.23%);
	box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.71), inset 0px -3px 13px rgba(0, 0, 0, 0.33);
	border-radius: 0px 0px 26px 26px;

	& > button {
		all: unset;
		display: flex;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
		padding: 10px;
		cursor: pointer;

		& > p {
			padding: 0 10px;
		}
	}
`;

export default Header;
