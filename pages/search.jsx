import React from 'react';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import { searchData, imageData } from '../mockResponse';
import SearchResults from '../components/SearchResults';
import { useRouter } from 'next/router';
import ImageResults from '../components/ImageResults';

const Search = ({ results }) => {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search Clone</title>
			</Head>

			{/* Search Header */}
			<SearchHeader />

			{/* Search/Image Results */}
			{router.query.searchType === 'image' ? (
				<ImageResults results={results} />
			) : (
				<SearchResults results={results} />
			)}
		</div>
	);
};

export default Search;

export const getServerSideProps = async (context) => {
	const startIndex = context.query.start || '1';
	const mockData = true;

	const data = mockData
		? imageData
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.GOOGLE_SEARCH_API_KEY
				}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${context.query.term}${
					context.query.searchType && '&searchType=image'
				}&start=${startIndex}`
		  ).then((res) => {
				return res.json();
		  });

	return {
		props: {
			results: data,
		},
	};
};
