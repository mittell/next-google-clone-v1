import React from 'react';
import SearchOption from './SearchOption';
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const SearchHeaderOptions = () => {
	const router = useRouter();

	const styles = {
		container:
			'flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-60 lg:justify-start border-b',
	};

	return (
		<div className={styles.container}>
			<SearchOption
				title='All'
				Icon={MagnifyingGlassIcon}
				selected={router.query.searchType === '' || !router.query.searchType}
			/>
			<SearchOption
				title='Images'
				Icon={PhotoIcon}
				selected={router.query.searchType === 'image'}
			/>
		</div>
	);
};

export default SearchHeaderOptions;
