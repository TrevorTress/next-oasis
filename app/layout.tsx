'use client';
import styled from 'styled-components';
import StyleRegistry from './registry';
import GlobalStyles from '@/styles/GlobalStyles';
import Header from '@/components/shell/I-Header';
import Body from '@/components/shell/III-Body';
import Footer from '@/components/shell/VI-Footer';
interface RootProps {
	className?: string;
	children: React.ReactNode;
}

const Root = ({ className, children }: RootProps) => {
	return (
		<>
			<html
				lang="en"
				className={className}
			>
				<StyleRegistry>
					<head>
						<title>QUIKSuite</title>
						<meta
							name="description"
							content="Generated by create next app"
						/>
					</head>
					<GlobalStyles />
					<body>
						<Header />
						<Body>{children}</Body>

						<Footer />
					</body>
				</StyleRegistry>
			</html>
		</>
	);
};

export default styled(Root)``;
