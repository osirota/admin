'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const { user } = useUser();
		const router = useRouter();
		useEffect(() => {
			if (!user) {
				return router.push('/api/auth/login');
			}
		}, [router, user]);

		return <Component {...props} />;
	};
}
