import { createGlobalStyle } from 'styled-components';

// global vars
export default createGlobalStyle`
	:root {
		--header-height: 11vh;
		--footer-height: 6vh;
	}

	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	html {
		background: linear-gradient(0deg, rgba(199, 199, 199, 1) 0%, rgba(255, 255, 255, 1) 50%);
		background-size: 100% 100vh;
		margin: 0;
	}

	body {
		font-family: 'Roboto Mono', monospace !important;
		margin: 0;
	}



	switchbox {
		display: flex;
	}

	@media screen and (max-width: 480px) {
		switchbox {
			display: block;
		}
	}	
`;
