import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
		--Very-dark-blue: hsl(233, 47%, 7%);
		--Dark-desaturated-blue: hsl(244, 38%, 16%);
		--Soft-violet: hsl(277, 64%, 61%);

		--White: hsl(0, 0%, 100%);
		--Slightly-transparent-white-main: hsla(0, 0%, 100%, 0.75);
		--Slightly-transparent-white-start: hsla(0, 0%, 100%, 0.6);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100%;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		font-family: 'inter', sans-serif;
		font-weight: 400;
		color: var(--Slightly-transparent-white-start);
		background: var(--Very-dark-blue);
	}
`;