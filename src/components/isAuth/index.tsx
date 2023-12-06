'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const { user } = useUser();
		const router = useRouter();
		if (!user) {
			return router.push('/api/auth/login');
		}

		return <Component {...props} />;
	};
}
