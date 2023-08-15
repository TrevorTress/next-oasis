import { createGlobalStyle } from 'styled-components';

// global vars
export default createGlobalStyle`
:root {

}

body {
	font-family: 'Roboto Mono', monospace!important;
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
