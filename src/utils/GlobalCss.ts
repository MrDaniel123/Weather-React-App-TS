import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-family: Arial, Helvetica, sans-serif;
	background-color: rgb(41, 41, 41);
}`;
