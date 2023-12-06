import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: any) {
	const { user } = pageProps;
	return (
		<UserProvider user={user}>
			<Component {...pageProps} />
		</UserProvider>
	);
}
