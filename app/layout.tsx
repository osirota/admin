import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import StyledComponentsRegistry from '../libs/AntdRegistry';
import theme from '../theme/themeConfig';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<UserProvider>
						<ConfigProvider theme={theme}>{children}</ConfigProvider>
					</UserProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}

export default RootLayout;