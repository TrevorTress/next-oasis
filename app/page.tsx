'use client';
import { FC } from 'react';
import styled from 'styled-components';

const HomeComp: FC<{ className?: string }> = ({ className }) => {
	return <div className={className}>Hello</div>;
};

const Home = styled(HomeComp)``;
export default Home;
