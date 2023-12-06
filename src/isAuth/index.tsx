'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const { user, isLoading } = useUser();
		const router = useRouter();
		useEffect(() => {
			if (!user && !isLoading) {
				return router.push('/api/auth/login');
			}
		}, [router, user, isLoading]);

		return <Component {...props} />;
	};
}
