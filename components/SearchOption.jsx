import { useRouter } from 'next/router';
import React from 'react';

const SearchOption = ({ title, Icon, selected }) => {
	const router = useRouter();

	const handleSearchSelect = (title) => {
		router.push({
			pathname: '/search',
			query: {
				term: router.query.term,
				searchType: title === 'Images' ? 'image' : '',
			},
		});
	};

	const styles = {
		container:
			'flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3',
		icon: 'h-4',
	};

	return (
		<div
			className={`${styles.container} ${
				selected && 'text-blue-500 border-blue-500'
			}`}
			onClick={() => handleSearchSelect(title)}
		>
			<Icon className={styles.icon} />
			<p>{title}</p>
		</div>
	);
};

export default SearchOption;
