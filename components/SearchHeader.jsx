import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
	MagnifyingGlassIcon,
	MicrophoneIcon,
	XMarkIcon,
} from '@heroicons/react/20/solid';
import User from './User';

const SearchHeader = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const handleHome = () => {
		router.push('/');
	};

	const handleSearchClear = () => {
		searchInputRef.current.value = '';
	};

	const handleSearch = (e) => {
		e.preventDefault();

		const searchTerm = searchInputRef.current.value.trim();

		if (!searchTerm) {
			return;
		}

		router.push({ pathname: '/search', query: { term: searchTerm } });
	};

	const styles = {
		header: 'sticky top-0 bg-white cursor-pointer',
		headerImage: 'cursor-pointer',
		xIcon: 'h-7 text-gray-500 cursor-pointer sm:mr-3',
		microphoneIcon:
			'h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3',
		searchIcon: 'h-6 hidden sm:inline-flex text-blue-500',
		container: 'flex w-full p-6 items-center',
		user: 'ml-auto whitespace-nowrap',
		searchForm:
			'flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center',
		searchInput: 'w-full focus:outline-none',
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Image
					src='https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
					alt='Google Logo'
					height={56}
					width={160}
					objectFit='contain'
					className={styles.headerImage}
					onClick={handleHome}
				/>
				<form className={styles.searchForm}>
					<input
						type='text'
						defaultValue={router.query.term}
						ref={searchInputRef}
						className={styles.searchInput}
					/>
					<XMarkIcon className={styles.xIcon} onClick={handleSearchClear} />
					<MicrophoneIcon className={styles.microphoneIcon} />
					<MagnifyingGlassIcon
						className={styles.searchIcon}
						onClick={handleSearch}
					/>
					<button type='submit' hidden onClick={handleSearch}></button>
				</form>
				<User className={styles.user} />
			</div>
		</header>
	);
};

export default SearchHeader;
