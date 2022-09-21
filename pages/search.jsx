import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import { searchData, imageData } from '../mockResponse';

const Search = ({ results }) => {
	console.log(results);
	return (
		<div>
			<Head>
				<title>Search Page</title>
			</Head>

			{/* Search Header */}
			<SearchHeader />

			{/* Search Results */}
		</div>
	);
};

export default Search;

export const getServerSideProps = async (context) => {
	const mockData = true;
	const data = mockData
		? searchData
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.GOOGLE_SEARCH_API_KEY
				}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${context.query.term}${
					context.query.searchType && '&searchType=image'
				}`
		  ).then((res) => {
				return res.json();
		  });

	return {
		props: {
			results: data,
		},
	};
};
