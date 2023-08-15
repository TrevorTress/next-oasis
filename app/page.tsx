'use client';
import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

const Dashboard: FC<{ className?: string }> = ({ className }) => {
	const [slide, setSlide] = useState(0);
	const [itemClasses, setItemClasses] = useState<string[]>([]);

	const getSlideClass = (index: number) => {
		const position = (index - slide + items.length) % items.length;

		if (position === 0) return 'selected';
		if (position === 1) return 'next';
		if (position === -1 || position === items.length - 1) return 'prev';
		if (Math.abs(position) === 2) return 'nextRightSecond';
		if (Math.abs(position) === items.length - 2) return 'prevLeftSecond';
		return position < 0 ? 'hideRight' : 'hideLeft';
	};

	const items = ['https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg'];

	useEffect(() => {
		const updatedItemClasses = items.map((_, index) => getSlideClass(index));
		setItemClasses(updatedItemClasses);
	}, [slide]);

	if (itemClasses.length > 0) {
		return (
			<div
				id="carousel"
				className={className}
			>
				{items.map((item, index) => (
					<div
						key={index}
						className={`carousel-item ${itemClasses[index]}`}
						onClick={() => setSlide(index)}
					>
						<img
							src={item}
							alt={`Item ${index}`}
						/>
						<div className="carousel-label">Item {index + 1}</div>
					</div>
				))}
			</div>
		);
	}
};

export default styled(Dashboard)`
	#carousel {
		height: 400px;
		top: 50%;
		overflow: hidden;
	}

	.carousel-item {
		position: absolute;
		top: 18vh;
		transition: transform 1s, left 1s, opacity 1s, z-index 0s;
		opacity: 1;

		img {
			width: 19vw;
			height: 40vh;
			transition: all 0.5s;
			border-radius: 1rem;

			&:hover {
				filter: brightness(0.9);
				transform: scale(1.01);
			}
		}
	}

	.hideLeft {
		left: 0%;
		opacity: 0;
		transform: translateY(50%) translateX(-50%);
	}

	.hideRight {
		left: 100%;
		opacity: 0;
		transform: translateY(50%) translateX(-50%);
	}

	.prev {
		z-index: 5;
		left: 30%;
		transform: translateY(-3%) translateX(-50%);
	}

	.next {
		z-index: 5;
		left: 70%;
		transform: translateY(-3%) translateX(-50%);
	}

	.prevLeftSecond {
		z-index: 4;
		left: 10%;
		transform: translateY(-6%) translateX(-50%);
		opacity: 0.7;
	}

	.nextRightSecond {
		z-index: 4;
		left: 90%;
		transform: translateY(-6%) translateX(-50%);
		opacity: 0.7;
	}

	.selected {
		z-index: 10;
		left: 50%;
		transform: translateY(0px) translateX(-50%);

		img {
		}
	}

	.carousel-label {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: white;

		padding: 5px 10px;
		border-radius: 4px;
		font-size: 12px;
	}
`;
