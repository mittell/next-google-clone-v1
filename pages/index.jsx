import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/20/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const handleSearch = (e) => {
		e.preventDefault;

		const searchTerm = searchInputRef.current.value;

		if (!searchTerm.trim()) {
			return;
		}

		router.push(`/search?term=${searchTerm.trim()}`);
	};

	const styles = {
		form: 'flex flex-col items-center mt-40',
		inputContainer:
			'flex w-full mt-5 max-w-[90%] mx-auto border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl',
		searchIcon: 'h-5 text-gray-500 mr-3',
		microphoneIcon: 'h-5 ml-2',
		searchInput: 'flex-grow focus:outline-none',
		button: 'btn',
		buttonContainer:
			'flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center',
	};

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

			{/* Header */}
			<Header />

			{/* Body */}
			<form className={styles.form}>
				<Image
					src='https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
					alt='Google Logo'
					height={112}
					width={320}
				/>
				<div className={styles.inputContainer}>
					<MagnifyingGlassIcon className={styles.searchIcon} />
					<input
						type='text'
						className={styles.searchInput}
						ref={searchInputRef}
					/>
					<MicrophoneIcon className={styles.microphoneIcon} />
				</div>
				<div className={styles.buttonContainer}>
					<button className={styles.button} onClick={handleSearch}>
						Google Search
					</button>
					<button className={styles.button}>I&apos;m Feeling Lucky</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}
