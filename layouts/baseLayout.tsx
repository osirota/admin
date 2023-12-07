'use client';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, theme } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

interface MenuItems {
	label: string;
	pathname: string;
	key: string;
	icon: any;
}

const items: MenuItems[] = [
	{
		label: 'Dasboard',
		pathname: '/',
		key: '1',
		icon: <MailOutlined />,
	},
	{
		label: 'Items list',
		pathname: '/items',
		key: '2',
		icon: <LinkOutlined />,
	},
];
interface StyledRegistryProps {
	children: any;
}
const BaseLayout = ({ children }: StyledRegistryProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const [current, setCurrent] = useState<MenuItems | undefined>(items[0]);
	const {
		token: { boxShadow, colorBgContainer, padding, marginMD },
	} = theme.useToken();

	const router = useRouter();
	const path = usePathname();
	const handleNavigate = (navigate: any) => {
		const {
			item: {
				props: { pathname },
			},
		} = navigate;
		router.push(pathname);
	};
	useEffect(() => {
		const current = items.find((nav) => nav.pathname === path);
		setCurrent(current);
	}, [path]);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<Menu
					theme="dark"
					mode="inline"
					items={items}
					onSelect={handleNavigate}
					selectedKeys={[current?.key || '']}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding,
						backgroundColor: colorBgContainer,
						boxShadow,
					}}
				>
					<Title level={4}>{current?.label}</Title>
				</Header>
				<Content style={{ margin: '0 16px' }}>
					<div
						style={{
							marginTop: marginMD,
							padding: 24,
							minHeight: 360,
							boxShadow,
						}}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Админка крутых ребят ©2023 Created by Next
				</Footer>
			</Layout>
		</Layout>
	);
};

export default BaseLayout;
