'use client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import BaseLayout from '../layouts/baseLayout';

const App = () => {
	return <BaseLayout>Тут будут графики с нашими милионнами</BaseLayout>;
};

export default withPageAuthRequired(App);
