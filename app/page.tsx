'use client';
import LandingPage from '@/components/Home/Home';
import Dashboard from '@/components/Home/Dashboard';
import { FC, useState } from 'react';
import styled from 'styled-components';

const Home: FC<{ className?: string }> = ({ className }) => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	return !loggedIn ? <LandingPage /> : <Dashboard />;
};

export default styled(Home)``;
