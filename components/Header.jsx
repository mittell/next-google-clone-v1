import React from 'react';
import User from './User';

const styles = {
	header: 'flex justify-between p-5 text-small text-gray-700',
	headerItemContainer: 'flex space-x-4 items-center',
	headerItem: 'link',
};

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerItemContainer}>
				<p className={styles.headerItem}>About</p>
				<p className={styles.headerItem}>Store</p>
			</div>
			<div className={styles.headerItemContainer}>
				<p className={styles.headerItem}>Gmail</p>
				<p className={styles.headerItem}>Images</p>
				<User />
			</div>
		</header>
	);
};

export default Header;
