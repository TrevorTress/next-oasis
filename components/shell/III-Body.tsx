import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface NavbarProps {
	className?: string;
	children?: ReactNode;
}

const ContainerComp: FC<NavbarProps> = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

// main page container
const Container = styled(ContainerComp)`
	position: relative;
	top: var(--header-height); // shift past header
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - var(--header-height) - var(--footer-height)); // (page - header - footer)
	width: 100%;

	// mobile adjustments
	@media screen and (max-width: 480px) {
		height: calc(82vh - var(--header-height));
		padding: 1rem;
		padding-bottom: 2rem;
	}
`;

export default Container;
