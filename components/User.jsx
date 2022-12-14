/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useSession } from 'next-auth/react';

const User = ({ className }) => {
	const { data: session } = useSession();

	const styles = {
		userImage: 'h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1',
		signIn:
			'bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md',
	};

	if (session) {
		return (
			<>
				<img
					className={`${styles.userImage} ${className}`}
					src={session.user.image}
					alt='User Image'
				/>
			</>
		);
	}

	return (
		<>
			<button className={`${styles.signIn} ${className}`}>Sign In</button>
		</>
	);
};

export default User;
