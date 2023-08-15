'use client';
import styled from 'styled-components';
import StyleRegistry from './registry';
import GlobalStyles from '@/styles/GlobalStyles';
import Header from './components/shell/I-Header';
interface RootProps {
	className?: string;
	children: React.ReactNode;
	title?: string;
	description?: string;
}

const RootLayout = ({ className, children, title = 'QuikSuite', description = 'Generated by create next app' }: RootProps) => {
	return (
		<>
			<html
				lang="en"
				className={className}
			>
				<StyleRegistry>
					<head>
						<title>{title}</title>
						<meta
							name="description"
							content={description}
						/>
					</head>
					<GlobalStyles />
					<body>
						<Header />
						{children}
					</body>
				</StyleRegistry>
			</html>
		</>
	);
};

const Root = styled(RootLayout)`
	background: linear-gradient(0deg, rgba(199, 199, 199, 1) 0%, rgba(255, 255, 255, 1) 50%);
	background-size: 100% 100vh;
	margin: 0;

	& body {
		margin: 0;
	}
`;

export default Root;
