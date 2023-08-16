import { useState, useEffect, FC } from 'react';
import { styled } from 'styled-components';

const CycleHeading: FC<{ className?: string }> = ({ className }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const cycleInterval = 4000; // 3 seconds

	const values = [
		{ text: 'Hello', color: 'red' },
		{ text: 'Welcome', color: 'blue' },
		{ text: 'Greetings', color: 'green' },
		{ text: 'Hola', color: 'yellow' },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
		}, cycleInterval);

		return () => clearInterval(interval);
	}, [values, cycleInterval]);

	const { text, color } = values[currentIndex];

	return (
		<div className={className}>
			<h1 style={{ color: color }}>{text}</h1>
			<p>simplified.</p>
		</div>
	);
};

export default styled(CycleHeading)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	overflow: hidden;

	& h1 {
		font-size: 60px;
		margin-right: 1rem;
		animation: cycleAnimation 4s infinite;
		animation-delay: 0.8s;
	}

	& p {
		font-size: 50px;
		font-weight: 700;
	}

	@keyframes cycleAnimation {
		0%,
		100% {
			opacity: 0;
			transform: translateY(-20%);
		}
		10%,
		90% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
