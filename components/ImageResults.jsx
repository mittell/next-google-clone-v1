import React from 'react';
import Pagination from './Pagination';

const ImageResults = ({ results }) => {
	const styles = {
		container: 'mt-4',
		containerGrid:
			'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4',
		resultContainer: 'mb-8',
		resultGroup: 'group',
		resultImage: 'group-hover:shadow-xl w-full h-60 object-contain',
		resultTitleLink: 'group-hover:underline',
		resultTitle: 'truncate text-xl',
		resultUrlLink: 'group-hover:underline',
		resultUrl: 'text-gray-600',
	};

	return (
		<div className={styles.container}>
			<div className={styles.containerGrid}>
				{results.items?.map((result) => (
					<div key={result.link} className={styles.resultContainer}>
						<div className={styles.resultGroup}>
							<a href={result.image.contextLink}>
								<img
									src={result.link}
									alt={result.title}
									className={styles.resultImage}
								/>
							</a>
							<a
								href={result.image.contextLink}
								className={styles.resultTitleLink}
							>
								<h2 className={styles.resultTitle}>{result.title}</h2>
							</a>
							<a
								href={result.image.contextLink}
								className={styles.resultUrlLink}
							>
								<p className={styles.resultUrl}>{result.displayLink}</p>
							</a>
						</div>
					</div>
				))}
			</div>
			<div>
				<Pagination />
			</div>
		</div>
	);
};

export default ImageResults;
