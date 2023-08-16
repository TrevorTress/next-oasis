'use client';
import Carousel from '@/components/Carousel';
import CycleHeading from '@/components/CycleHeading';
import { FC } from 'react';
import styled from 'styled-components';

const Dashboard: FC<{ className?: string }> = ({ className }) => {
	return (
		<>
			<div className={className}>
				<div className="xxx">
					<CycleHeading />
					<p>this app is literally so flippin cool dude. like for real. just try it bro. im serious. you wont regret it bro. plz try our app bro. you need to. like right now bro.</p>
				</div>
				<div className="yyy">
					<label>Email</label>
					<input
						type="text"
						placeholder="Enter username"
					></input>
					<label>Password</label>
					<input
						type="text"
						placeholder="Enter password"
					></input>
				</div>
			</div>

			<Carousel />
		</>
	);
};

export default styled(Dashboard)`
	display: flex;

	& .xxx,
	.yyy {
		background: #c0c0c0b3;
		text-align: center;
		font-weight: 700;
		border-radius: 2rem;
		margin: 3rem 2rem;
		box-shadow: 2px 2px 12px -1px rgba(0, 0, 0, 0.75);
	}

	& .xxx {
		width: 65vw;
		& p {
			font-size: 30px;
		}
	}

	& .yyy {
		width: 24vw;

		& input {
			display: block;
			margin: auto;
			width: 70%;
			border-radius: 1rem;
			padding: 1rem;
		}

		& label {
			font-size: 2rem;
		}
	}
`;
