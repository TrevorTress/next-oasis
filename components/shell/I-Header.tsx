'use client';
import { styled } from 'styled-components';

const Header: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<header className={className}>
			<div className="header-left">
				<img src="assets/shell/logo.png" />
			</div>
			<div className="header-right"></div>
		</header>
	);
};

export default styled(Header)`
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: var(--header-height);
	padding: 0.8vh 0.4vw;
	border-bottom: solid #d3d3d36e 2px;
	z-index: 100;

	.header-left {
		height: 100%;

		& a {
			color: #fff;
			text-decoration: none;
			margin: auto 0;
		}

		& img,
		h1 {
			display: block;
			height: 100%;
			width: 15vw;
			margin: auto;
			color: #000;
		}
	}

	// title spacing
	.header-right {
		display: flex;

		& h2 {
			font-weight: bold;
			margin: auto 1rem;
			color: #fff;
		}

		.header-buttons {
			display: flex;
			& button {
				width: 4vw;
				height: 90%;
				border: none;
				border-radius: 1rem;
				margin: auto 5px;
				background: #d0f6ffdb;

				& svg {
					color: var(--secondary);
					margin: auto;
					width: 100%;
				}

				&:hover {
					transform: scale(1.03);
					filter: brightness(0.9);
				}
			}
		}

		.mobile-menu {
			display: none;
		}
	}

	@media screen and (max-width: 480px) {
		position: absolute;
		.header-left {
		}

		.header-right {
			margin: 0;

			& .header-buttons {
				display: none !important;
			}
		}

		.mobile-menu {
			display: block !important;
			margin: auto;

			& button {
				width: 16vw;
				border: none;
				border-radius: 1rem;
				margin: auto 5px;
				padding: 0;
				background: #ffffff1f;
			}

			& svg {
				color: var(--secondary);
			}
		}

		.dropdown-menu.show {
			background: lightgrey;
			width: 40vw;

			& svg {
				color: var(--primary);
				margin-right: 10px;
			}
		}

		.dropdown-item {
			display: flex;
			font-weight: bold;
			justify-content: space-between;

			& span {
				margin: auto;
			}
		}
	}
`;
