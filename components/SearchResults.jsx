import React from 'react';

const SearchResults = ({ results }) => {
	const styles = {
		container: 'w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[52]',
		infoText: 'text-gray-600 text-sm mb-5 mt-3',
	};

	return (
		<div className={styles.container}>
			<p className={styles.infoText}>
				About {results.searchInformation.formattedTotalResults} results (
				{results.searchInformation.formattedSearchTime} seconds)
			</p>
		</div>
	);
};

export default SearchResults;
