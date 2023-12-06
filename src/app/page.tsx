'use client';
import isAuth from '@/isAuth';
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';
import BaseLayout from './baseLayout';

const App: React.FC = () => {
	const { user } = useUser();

	return <BaseLayout>{user?.name}</BaseLayout>;
};

export default isAuth(App);
