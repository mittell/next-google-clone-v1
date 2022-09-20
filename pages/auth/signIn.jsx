import React from 'react';
import { getProviders, signIn as logIn } from 'next-auth/react';

import Header from '../../components/Header';
import Image from 'next/image';

const signIn = ({ providers }) => {
	const styles = {
		outerContainer: 'mt-40',
		innerContainer: 'flex flex-col items-center',
		providerImage: 'w-52',
		infoText: 'text-small italic my-10 text-center',
		signIn: 'bg-red-400 rounded-lg text-white p-3 hover:bg-red-500',
	};

	return (
		<>
			<Header />
			<div className={styles.outerContainer}>
				{Object.values(providers).map((provider) => (
					<div key={provider.name} className={styles.innerContainer}>
						<Image
							className={styles.providerImage}
							src='https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
							alt='Google Logo'
							height={112}
							width={320}
						/>
						<p className={styles.infoText}>
							This website is for learning purposes only!
						</p>
						<button
							className={styles.signIn}
							onClick={() => logIn(provider.id, { callbackUrl: '/' })}
						>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default signIn;

export const getServerSideProps = async () => {
	const providers = await getProviders();

	return {
		props: { providers },
	};
};
