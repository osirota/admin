'use client';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

interface MenuItems {
	label: string;
	pathname: string;
	key: string;
	icon: any;
}

const items: MenuItems[] = [
	{
		label: 'Home',
		pathname: '/',
		key: '1',
		icon: <MailOutlined />,
	},
	{
		label: 'Users',
		pathname: '/users',
		key: '2',
		icon: <LinkOutlined />,
	},
];
interface StyledRegistryProps {
	children: any;
}
const BaseLayout = ({ children }: StyledRegistryProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const [current, setCurrent] = useState('');
	const {
		token: { colorBgContainer },
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
		setCurrent(current?.key ?? '');
	}, [path]);
	console.log('current', current);

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
					selectedKeys={[current]}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }} />
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
						}}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default BaseLayout;
