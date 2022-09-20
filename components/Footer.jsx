import React from 'react';

const Footer = () => {
	const styles = {
		footer:
			'absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600',
	};

	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; {new Date().getFullYear()} Chris Mittell</p>
		</footer>
	);
};

export default Footer;
