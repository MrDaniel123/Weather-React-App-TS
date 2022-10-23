import styled, { keyframes } from 'styled-components';

const moveBlurDown = keyframes`
	from{
		transform: translate(0, 0);
	}
	to{
		transform: translate(100px, 50px);

	}

`;
const moveBlurUp = keyframes`
	from{
		transform: translate(0, 0);
	}
	to{
		transform: translate(100px,-50px);

	}

`;

export const AppContainer = styled.div`
	& > div:nth-child(1) {
		position: absolute;
		top: 170px;
		left: 10px;
		width: 98px;
		height: 161.58px;
		animation: ${moveBlurDown} 4s 1s infinite ease-in-out alternate;

		background: rgba(0, 0, 0, 0.38);
		filter: blur(31px);
	}

	& > div:nth-child(2) {
		position: absolute;
		top: 409px;
		left: 10px;
		width: 142.61px;
		height: 135.98px;
		animation: ${moveBlurUp} 3s infinite ease-in-out alternate;

		background: #000000;
		filter: blur(45.5px);
	}

	& > div:nth-child(3) {
		position: absolute;
		top: 460px;
		right: 20px;
		width: 122.57px;
		height: 117.01px;
		animation: ${moveBlurDown} 4s 1s infinite ease-in-out alternate;

		background: rgba(0, 0, 0, 0.58);
		filter: blur(45.5px);
	}

	& > div:nth-child(4) {
		position: absolute;
		top: 560px;
		right: 80px;
		animation: ${moveBlurUp} 3s infinite ease-in-out alternate;

		width: 165.74px;
		height: 158.12px;

		background: rgba(0, 0, 0, 0.5);
		filter: blur(45.5px);
	}
	& > div:nth-child(5) {
		position: absolute;
		top: 580px;
		left: 40px;
		width: 60px;
		height: 92.08px;
		animation: ${moveBlurUp} 3s infinite ease-in-out alternate;

		background: #002689;
		filter: blur(32px);
	}

	& > div:nth-child(6) {
		position: absolute;
		top: 620px;
		right: 60px;
		animation: ${moveBlurDown} 4s 1s infinite ease-in-out alternate;

		width: 100.21px;
		height: 122.28px;

		background: #e1ff25;
		filter: blur(29px);
	}

	& > div:nth-child(7) {
		position: absolute;
		top: 700px;
		left: 10px;
		animation: ${moveBlurDown} 6s 1.5s infinite ease-in-out alternate;

		width: 127.19px;
		height: 131.76px;

		background: #35ff14;
		filter: blur(36px);
	}

	& > div:nth-child(8) {
		position: absolute;
		top: 790px;
		right: 12px;
		animation: ${moveBlurUp} 3s infinite ease-in-out alternate;

		width: 100.21px;
		height: 122.28px;

		background: #ff0000;
		filter: blur(23px);
	}

	& > div:nth-child(9) {
		position: absolute;
		top: 860px;
		left: 40px;
		animation: ${moveBlurDown} 6s 1.5s infinite ease-in-out alternate;

		width: 63.21px;
		height: 166.55px;

		background: #db00ff;
		filter: blur(31.5px);
	}

	& > div:nth-child(10) {
		position: absolute;
		top: 920px;
		right: 50px;
		width: 63.29px;
		height: 81.68px;
		animation: ${moveBlurUp} 3s infinite ease-in-out alternate;

		background: #f2ffa4;
		filter: blur(27.5px);
		transform: matrix(-0.2, 1.02, -0.9, -0.33, 0, 0);
	}

	& > div:nth-child(10) {
		position: absolute;
		top: 1000px;
		left: 10px;
		animation: ${moveBlurDown} 6s 1.5s infinite ease-in-out alternate;
		width: 81px;
		height: 73.12px;

		background: #000000;
		filter: blur(34px);
	}
`;
