import React from 'react';
import Parser from 'html-react-parser';

const SearchResults = ({ results }) => {
	const styles = {
		container: 'w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[52]',
		resultInfo: 'text-gray-600 text-sm mb-5 mt-3',
		resultContainer: 'max-w-xl mb-6',
		resultTitleGroup: 'group',
		resultLink: 'text-sm truncate',
		resultTitleContainer: 'group-hover:underline decoration-blue-800',
		resultTitle: 'truncate text-xl font-medium text-blue-800',
		resultContent: 'text-gray-600',
	};

	return (
		<div className={styles.container}>
			<p className={styles.resultInfo}>
				About {results.searchInformation.formattedTotalResults} results (
				{results.searchInformation.formattedSearchTime} seconds)
			</p>
			{results.items.map((result) => (
				<div key={result.link} className={styles.resultContainer}>
					<div className={styles.resultTitleGroup}>
						<a href={result.link} className={styles.resultLink}>
							{result.formattedUrl}
						</a>
						<a href={result.link} className={styles.resultTitleContainer}>
							<h2 className={styles.resultTitle}>{result.title}</h2>
						</a>
					</div>
					<p className={styles.resultContent}>{Parser(result.htmlSnippet)}</p>
				</div>
			))}
		</div>
	);
};

export default SearchResults;
