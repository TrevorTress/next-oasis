'use client';
import Carousel from '@/components/Carousel';
import CycleHeading from '@/components/CycleHeading';
import { FC } from 'react';
import styled from 'styled-components';

const Dashboard: FC<{ className?: string }> = ({ className }) => {
	return (
		<>
			<div className={className}></div>
			<CycleHeading />

			<Carousel />
		</>
	);
};

export default styled(Dashboard)``;
