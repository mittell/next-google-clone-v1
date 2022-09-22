import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

const Pagination = () => {
	const router = useRouter();
	const startIndex = Number(router.query.start) || 1;

	const styles = {
		containerOld:
			'text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0',
		container: 'text-blue-700 flex px-9 pb-4 justify-between sm:mr-30 md:mr-40',
		linkPrevIconContainer:
			'cursor-pointer flex flex-col items-center hover:underline',
		linkPrevIcon: 'h-5',
		linkNextIconContainer:
			'cursor-pointer flex flex-col items-center hover:underline',
		linkNextIcon: 'h-5',
	};

	return (
		<div className={styles.container}>
			{startIndex > 10 && (
				<Link
					href={`/search?term=${router.query.term}&searchType=${
						router.query.searchType
					}&start=${startIndex - 10}`}
				>
					<div className={styles.linkPrevIconContainer}>
						<ChevronLeftIcon className={styles.linkPrevIcon} />
						<p>Prev</p>
					</div>
				</Link>
			)}
			{startIndex < 90 && (
				<Link
					href={`/search?term=${router.query.term}&searchType=${
						router.query.searchType
					}&start=${startIndex + 10}`}
				>
					<div className={styles.linkNextIconContainer}>
						<ChevronRightIcon className={styles.linkNextIcon} />
						<p>Next</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default Pagination;
