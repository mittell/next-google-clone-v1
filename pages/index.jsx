import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Google Search Clone</title>
				<meta
					name='description'
					content='A Google Search clone built with Next.js and Tailwind'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Hello World</h1>
		</div>
	);
}
