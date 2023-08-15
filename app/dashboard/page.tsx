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

	const items = ['https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg', 'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg'];

	useEffect(() => {
		const updatedItemClasses = items.map((item, index) => getSlideClass(index));
		setItemClasses(updatedItemClasses);
	}, []);

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
				</div>
			))}
		</div>
	);
};

export default styled(Dashboard)`
	& #carousel {
		height: 400px;
		top: 50%;

		overflow: hidden;
	}

	.carousel-item {
		position: absolute;
		transition: transform 1s, left 1s, opacity 1s, z-index 0s;
		opacity: 1;

		img {
			width: 400px;
			transition: width 1s;
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

		img {
			width: 200px;
		}
	}

	.prev {
		z-index: 5;
		left: 30%;
		transform: translateY(50px) translateX(-50%);

		img {
			width: 300px;
		}
	}

	.prevLeftSecond {
		z-index: 4;
		left: 15%;
		transform: translateY(50%) translateX(-50%);
		opacity: 0.7;

		img {
			width: 200px;
		}
	}

	.selected {
		z-index: 10;
		left: 50%;
		transform: translateY(0px) translateX(-50%);
	}

	.next {
		z-index: 5;
		left: 70%;
		transform: translateY(50px) translateX(-50%);

		img {
			width: 300px;
		}
	}

	.nextRightSecond {
		z-index: 4;
		left: 85%;
		transform: translateY(50%) translateX(-50%);
		opacity: 0.7;

		img {
			width: 200px;
		}
	}
`;
