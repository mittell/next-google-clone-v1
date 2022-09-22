import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import User from './User';

const styles = {
	header: 'flex justify-between p-5 text-small text-gray-700',
	headerItemContainer: 'flex space-x-4 items-center',
	headerItem: 'link',
};

const Header = () => {
	const router = useRouter();

	const handleImageLink = () => {
		router.push({
			pathname: '/search',
			query: { term: router.query.term || 'Google', searchType: 'image' },
		});
	};

	return (
		<header className={styles.header}>
			<div className={styles.headerItemContainer}>
				<Link href='https://about.google.com'>
					<p className={styles.headerItem}>About</p>
				</Link>
				<Link href='https://store.google.com'>
					<p className={styles.headerItem}>Store</p>
				</Link>
			</div>
			<div className={styles.headerItemContainer}>
				<Link href='https://mail.google.com'>
					<p className={styles.headerItem}>Gmail</p>
				</Link>
				<a className={styles.headerItem} onClick={handleImageLink}>
					Images
				</a>
				<User />
			</div>
		</header>
	);
};

export default Header;
