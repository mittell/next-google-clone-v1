export const searchData = {
	kind: 'customsearch#search',
	url: {
		type: 'application/json',
		template:
			'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
	},
	queries: {
		request: [
			{
				title: 'Google Custom Search - test',
				totalResults: '16920000000',
				searchTerms: 'test',
				count: 10,
				startIndex: 1,
				inputEncoding: 'utf8',
				outputEncoding: 'utf8',
				safe: 'off',
				cx: 'f34ee7434c6794ae2',
			},
		],
		nextPage: [
			{
				title: 'Google Custom Search - test',
				totalResults: '16920000000',
				searchTerms: 'test',
				count: 10,
				startIndex: 11,
				inputEncoding: 'utf8',
				outputEncoding: 'utf8',
				safe: 'off',
				cx: 'f34ee7434c6794ae2',
			},
		],
	},
	context: {
		title: 'Next Search Clone',
	},
	searchInformation: {
		searchTime: 0.445635,
		formattedSearchTime: '0.45',
		totalResults: '16920000000',
		formattedTotalResults: '16,920,000,000',
	},
	items: [
		{
			kind: 'customsearch#result',
			title: 'Test.com: Home',
			htmlTitle: '<b>Test</b>.com: Home',
			link: 'https://test.com/',
			displayLink: 'test.com',
			snippet:
				"I'm looking for... An Internet Speed Test A COVID Test A Testing And Certification Platform A Lab Test Location A Virtual Proctoring Solution",
			htmlSnippet:
				'I&#39;m looking for... An Internet Speed <b>Test</b> A COVID <b>Test</b> A <b>Testing</b> And Certification Platform A Lab <b>Test</b> Location A Virtual Proctoring Solution',
			cacheId: 'cljxcDX_QB8J',
			formattedUrl: 'https://test.com/',
			htmlFormattedUrl: 'https://<b>test</b>.com/',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSy7thielYoTqU-P3ad3zMaiIiXHwwHfHDaJB1jXxiH55kXTJgHthtyt5Aa',
						width: '275',
						height: '183',
					},
				],
				metatags: [
					{
						'og:type': 'website',
						'twitter:card': 'summary_large_image',
						'og:site_name': 'Test.com',
						'article:modified_time': '2021-10-18T20:35:54+00:00',
						viewport: 'width=device-width, initial-scale=1',
						'og:title': 'Home - Test.com',
						'og:locale': 'en_US',
						'og:url': 'https://test.com/',
						'msapplication-tileimage':
							'https://test.com/wp-content/uploads/2021/08/Gauge-Fav-Icon.png',
					},
				],
				cse_image: [
					{
						src: 'https://test.com/wp-content/uploads/2021/10/hay-s-YXg0VPwLwnM-unsplash-scaled-1-300x200.jpeg',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title:
				"America's Test Kitchen | Episodes, Recipes & Reviews | America's ...",
			htmlTitle:
				'America&#39;s <b>Test</b> Kitchen | Episodes, Recipes &amp; Reviews | America&#39;s ...',
			link: 'https://www.americastestkitchen.com/',
			displayLink: 'www.americastestkitchen.com',
			snippet:
				'Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.',
			htmlSnippet:
				'Watch every episode from every season and find the best recipes, equipment reviews, taste <b>tests</b>, and cooking videos for home cooks.',
			cacheId: 'dSOkzGI8vY8J',
			formattedUrl: 'https://www.americastestkitchen.com/',
			htmlFormattedUrl: 'https://www.americas<b>test</b>kitchen.com/',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVOtmY3y05zC17RDGlqIBsD4tth3osKp9mdfKpSmdvT5sZ4zBLBi2XuyU',
						width: '219',
						height: '230',
					},
				],
				metatags: [
					{
						'pinterest-rich-pin': 'false',
						'next-head-count': '30',
						'og:type': 'website',
						'theme-color': '#d73a15',
						'twitter:title':
							"America's Test Kitchen | Episodes, Recipes & Reviews | America's Test Kitchen",
						'fb:app_id': '514672908740278',
						viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
						'twitter:description':
							'Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.',
						'og:title':
							"America's Test Kitchen | Episodes, Recipes & Reviews | America's Test Kitchen",
						'og:url': 'http://www.americastestkitchen.com/',
						'og:description':
							'Watch every episode from every season and find the best recipes, equipment reviews, taste tests, and cooking videos for home cooks.',
						'fb:pages': '137227518307',
					},
				],
				cse_image: [
					{
						src: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_360,q_auto:low,w_344/v1/2022%20Homepage%20Landing/ATK-BookAd-Tablet',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Test - Wikipedia',
			htmlTitle: '<b>Test</b> - Wikipedia',
			link: 'https://en.wikipedia.org/wiki/Test',
			displayLink: 'en.wikipedia.org',
			snippet:
				"Test (assessment), an educational assessment intended to measure the respondents' knowledge or other abilities ...",
			htmlSnippet:
				'<b>Test</b> (assessment), an educational assessment intended to measure the respondents&#39; knowledge or other abilities&nbsp;...',
			cacheId: 'R94CAo00wOYJ',
			formattedUrl: 'https://en.wikipedia.org/wiki/Test',
			htmlFormattedUrl: 'https://en.wikipedia.org/wiki/<b>Test</b>',
			pagemap: {
				metatags: [
					{
						referrer: 'origin',
						'theme-color': '#eaecf0',
						'og:type': 'website',
						viewport:
							'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0',
						'og:title': 'Test - Wikipedia',
						'format-detection': 'telephone=no',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Mobile-Friendly Test - Google Search Console',
			htmlTitle: 'Mobile-Friendly <b>Test</b> - Google Search Console',
			link: 'https://search.google.com/test/mobile-friendly',
			displayLink: 'search.google.com',
			snippet:
				'test code. About this tool. Test how easily a visitor can use your page on a mobile device. Just enter a page URL to see how your page scores.',
			htmlSnippet:
				'<b>test</b> code. About this tool. <b>Test</b> how easily a visitor can use your page on a mobile device. Just enter a page URL to see how your page scores.',
			cacheId: 'J_vGwOd2geIJ',
			formattedUrl: 'https://search.google.com/test/mobile-friendly',
			htmlFormattedUrl: 'https://search.google.com/<b>test</b>/mobile-friendly',
			pagemap: {
				metatags: [
					{
						'application-name': 'Search Test Tool',
						referrer: 'origin',
						'apple-mobile-web-app-status-bar-style': 'black',
						'msapplication-tap-highlight': 'no',
						viewport:
							'initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
						'apple-mobile-web-app-capable': 'yes',
						'apple-mobile-web-app-title': 'Search Test Tool',
						'mobile-web-app-capable': 'yes',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Take a Test',
			htmlTitle: 'Take a <b>Test</b>',
			link: 'https://implicit.harvard.edu/implicit/takeatest.html',
			displayLink: 'implicit.harvard.edu',
			snippet:
				"Preliminary Information. On the next page you'll be asked to select an Implicit Association Test (IAT) from a list of possible topics .",
			htmlSnippet:
				'Preliminary Information. On the next page you&#39;ll be asked to select an Implicit Association <b>Test</b> (IAT) from a list of possible topics .',
			cacheId: 'hp0jVrH5XiUJ',
			formattedUrl: 'https://implicit.harvard.edu/implicit/takeatest.html',
			htmlFormattedUrl:
				'https://implicit.harvard.edu/implicit/takea<b>test</b>.html',
			pagemap: {
				metatags: [
					{
						viewport: 'width=device-width, initial-scale=1',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Test Definition & Meaning - Merriam-Webster',
			htmlTitle: '<b>Test</b> Definition &amp; Meaning - Merriam-Webster',
			link: 'https://www.merriam-webster.com/dictionary/test',
			displayLink: 'www.merriam-webster.com',
			snippet:
				'Medical Definition of test · 1 : a critical examination, observation, evaluation, or trial specifically : the procedure of submitting a statement to such ...',
			htmlSnippet:
				'Medical Definition of <b>test</b> &middot; 1 : a critical examination, observation, evaluation, or trial specifically : the procedure of submitting a statement to such&nbsp;...',
			cacheId: 'TGnEwn1_tb0J',
			formattedUrl: 'https://www.merriam-webster.com/dictionary/test',
			htmlFormattedUrl:
				'https://www.merriam-webster.com/dictionary/<b>test</b>',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKksTSKYwpW8It403nrjw5t1_a8pLO2PI6ImEG7uvFrNfacgiziPZgG-_O',
						width: '225',
						height: '225',
					},
				],
				metatags: [
					{
						'msapplication-tilecolor': '#2b5797',
						'og:image':
							'https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png',
						'twitter:title': 'Definition of TEST',
						'twitter:card': 'summary',
						'theme-color': '#ffffff',
						'twitter:url': 'https://www.merriam-webster.com/dictionary/test',
						'og:title': 'Definition of TEST',
						'twitter:aria-text': 'Share the Definition of test on Twitter',
						'og:aria-text': 'Post the Definition of test to Facebook',
						'og:description':
							'a means of testing: such as; something (such as a series of questions or exercises) for measuring the skill, knowledge, intelligence, capacities, or aptitudes of an individual or group… See the full definition',
						'twitter:image':
							'https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png',
						referrer: 'unsafe-url',
						'fb:app_id': '178450008855735',
						'twitter:site': '@MerriamWebster',
						viewport: 'width=device-width, initial-scale=1.0',
						'twitter:description':
							'a means of testing: such as… See the full definition',
						'og:url': 'https://www.merriam-webster.com/dictionary/test',
					},
				],
				cse_image: [
					{
						src: 'https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'COVID-19 Testing: What You Need to Know | CDC',
			htmlTitle: 'COVID-19 <b>Testing</b>: What You Need to Know | CDC',
			link: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html',
			displayLink: 'www.cdc.gov',
			snippet:
				'These tests detect viral genetic material, which may stay in your body for up to 90 days after you test positive. Therefore, you should not use a NAAT if you ...',
			htmlSnippet:
				'These <b>tests</b> detect viral genetic material, which may stay in your body for up to 90 days after you <b>test</b> positive. Therefore, you should not use a NAAT if you&nbsp;...',
			cacheId: 'jV_-IW4ip-0J',
			formattedUrl:
				'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html',
			htmlFormattedUrl:
				'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-<b>testing</b>/<b>testing</b>.html',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pQc-qSFLyocpav2cF0EocltQjJ5n2BF2O_RdAnZhWGD0my3-7Sbas6sT',
						width: '310',
						height: '163',
					},
				],
				organization: [
					{
						telephone: 'Call 800-232-4636',
						url: 'Email CDC-INFO',
					},
					{
						telephone: 'Call 800-232-4636',
						url: 'Email CDC-INFO',
					},
				],
				contactpoint: [
					{
						url: 'U.S. Department of Health & Human Services',
					},
					{
						url: 'USA.gov',
					},
				],
				metatags: [
					{
						'og:image':
							'https://www.cdc.gov/coronavirus/2019-ncov/images/your-health-sm.jpg',
						'theme-color': '#075290',
						'cdc:content_id': '14865',
						'article:published_time': '2020-02-11',
						'twitter:card': 'summary_large_image',
						'og:site_name': 'Centers for Disease Control and Prevention',
						'cdc:maintained_by':
							'NATL CENTER FOR IMMUNIZATION AND RESPIRATORY DISEASES',
						'cdc:first_published': 'Mar. 14, 2020',
						'og:image:type': 'image/jpeg',
						'og:description':
							'Symptoms, testing, what to do if sick, daily activities, and more.',
						'twitter:creator': '@CDCgov',
						'cdc:last_published': '2022-09-15T18:42:35Z',
						'twitter:site': '@CDCgov',
						'cdc:last_reviewed': 'Aug. 11, 2022',
						'cdc:content_source':
							'NATL CENTER FOR IMMUNIZATION AND RESPIRATORY DISEASES; DIVISION OF VIRAL DISEASES',
						'og:type': 'article',
						'twitter:title': 'COVID-19 and Your Health',
						'og:title': 'COVID-19 and Your Health',
						'cdc:last_updated': 'Aug. 11, 2022',
						'dc.date': '2022-09-15T06:41:46Z',
						'article:author': 'CDC',
						'cdc:wcms_build': '4.22.8 - b.1570',
						'twitter:image:src':
							'https://www.cdc.gov/coronavirus/2019-ncov/images/your-health-sm.jpg',
						'cdc:template_version': '4.0',
						'fb:app_id': '205691699516606',
						viewport:
							'width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no',
						'apple-mobile-web-app-capable': 'yes',
						'og:author': 'CDC',
						'twitter:description':
							'Symptoms, testing, what to do if sick, daily activities, and more.',
						'mobile-web-app-capable': 'yes',
					},
				],
				cse_image: [
					{
						src: 'https://www.cdc.gov/coronavirus/2019-ncov/images/your-health-sm.jpg',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Join a Test Meeting - Zoom',
			htmlTitle: 'Join a <b>Test</b> Meeting - Zoom',
			link: 'https://zoom.us/test',
			displayLink: 'zoom.us',
			snippet:
				'Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars ...',
			htmlSnippet:
				'Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars&nbsp;...',
			cacheId: 'Jsk355JURfkJ',
			formattedUrl: 'https://zoom.us/test',
			htmlFormattedUrl: 'https://zoom.us/<b>test</b>',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRybbVJzTpv2N5wdcoPrUIi6u47KvavnTdWEB-v4jU-pF8FtfNUbI3oC8s7',
						width: '225',
						height: '225',
					},
				],
				metatags: [
					{
						'p:domain_verify': '2bec2c9f9a864e14528964bf24c404b3',
						referrer: 'origin-when-cross-origin',
						'og:image': 'https://st3.zoom.us/static/6.2.8646/image/thumb.png',
						'og:type': 'website',
						'fb:app_id': '113289095462482',
						'og:site_name': 'Zoom Video Communications',
						viewport: 'width=device-width, initial-scale=1, minimum-scale=1.0',
						'og:title':
							'Video Conferencing, Web Conferencing, Webinars, Screen Sharing',
						'og:url': 'https://zoom.us/',
						'og:description':
							'Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems. Zoom Rooms is the original software-based conference room solution used around the world in board, conference, huddle, and training rooms, as well as executive offices and classrooms. Founded in 2011, Zoom helps businesses and organizations bring their teams together in a frictionless environment to get more done. Zoom is a publicly traded company headquartered in San Jose, CA.',
						'twitter:account_id': '522701657',
					},
				],
				cse_image: [
					{
						src: 'https://st3.zoom.us/static/6.2.8646/image/thumb.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Speedtest by Ookla - The Global Broadband Speed Test',
			htmlTitle: 'Speedtest by Ookla - The Global Broadband Speed <b>Test</b>',
			link: 'https://www.speedtest.net/',
			displayLink: 'www.speedtest.net',
			snippet:
				'Use Speedtest on all your devices with our free desktop and mobile apps.',
			htmlSnippet:
				'Use Speedtest on all your devices with our free desktop and mobile apps.',
			cacheId: '5RD1THTfC6wJ',
			formattedUrl: 'https://www.speedtest.net/',
			htmlFormattedUrl: 'https://www.speed<b>test</b>.net/',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUtjMLJawPpHjHHPqgDVIECjvzxm6AYK6x7wRPObSRd94pCz9yjvvULCA',
						width: '225',
						height: '225',
					},
				],
				metatags: [
					{
						'og:image': '//b.cdnst.net/images/share-logo.png',
						'twitter:app:id:googleplay': 'org.zwanoo.android.speedtest',
						'apple-itunes-app': 'app-id=300704847',
						'og:type': 'website',
						'og:image:width': '382',
						'twitter:card': 'app',
						'twitter:title':
							'Speedtest by Ookla - The Global Broadband Speed Test',
						'og:site_name': 'Speedtest.net',
						'og:title': 'Speedtest by Ookla - The Global Broadband Speed Test',
						'og:image:height': '200',
						'twitter:app:id:ipad': '300704847',
						'og:image:type': 'image/png',
						'twitter:app:id:iphone': '300704847',
						'og:description':
							'Use Speedtest on all your devices with our free desktop and mobile apps.',
						'twitter:image': '//b.cdnst.net/images/share-logo.png',
						'fb:app_id': '113312902042192',
						'twitter:site': '@speedtest',
						viewport: 'width=device-width, initial-scale=1.0, minimal-ui',
						'twitter:description':
							'Use Speedtest on all your devices with our free desktop and mobile apps.',
						'og:url': 'https://www.speedtest.net/',
						'google-play-app': 'app-id=org.zwanoo.android.speedtest',
					},
				],
				cse_image: [
					{
						src: 'https://b.cdnst.net/images/gauge-gradient-ul-multi-web.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'test - Wiktionary',
			htmlTitle: '<b>test</b> - Wiktionary',
			link: 'https://en.wiktionary.org/wiki/test',
			displayLink: 'en.wiktionary.org',
			snippet:
				'VerbEdit · To challenge. · To refine (gold, silver, etc.) · To put to the proof; to prove the truth, genuineness, or quality of by experiment, or by some principle ...',
			htmlSnippet:
				'VerbEdit &middot; To challenge. &middot; To refine (gold, silver, etc.) &middot; To put to the proof; to prove the truth, genuineness, or quality of by experiment, or by some principle&nbsp;...',
			cacheId: 'MOAdxo6g5IgJ',
			formattedUrl: 'https://en.wiktionary.org/wiki/test',
			htmlFormattedUrl: 'https://en.wiktionary.org/wiki/<b>test</b>',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8TD5ebT0xYa6TxvdK5kcPvs9qVg6DXqo74EzjibsLkoXvGCLrjjBPLVqv',
						width: '229',
						height: '220',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'og:image':
							'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sea_urchin_tests.jpg/1200px-Sea_urchin_tests.jpg',
						'theme-color': '#eaecf0',
						'og:image:width': '1200',
						'og:type': 'website',
						viewport:
							'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0',
						'og:title': 'test - Wiktionary',
						'og:image:height': '1149',
						'format-detection': 'telephone=no',
					},
				],
				cse_image: [
					{
						src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sea_urchin_tests.jpg/1200px-Sea_urchin_tests.jpg',
					},
				],
			},
		},
	],
};

export const imageData = {
	kind: 'customsearch#search',
	url: {
		type: 'application/json',
		template:
			'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
	},
	queries: {
		request: [
			{
				title: 'Google Custom Search - test',
				totalResults: '175520000000',
				searchTerms: 'test',
				count: 10,
				startIndex: 1,
				inputEncoding: 'utf8',
				outputEncoding: 'utf8',
				safe: 'off',
				cx: 'f34ee7434c6794ae2',
				searchType: 'image',
			},
		],
		nextPage: [
			{
				title: 'Google Custom Search - test',
				totalResults: '175520000000',
				searchTerms: 'test',
				count: 10,
				startIndex: 11,
				inputEncoding: 'utf8',
				outputEncoding: 'utf8',
				safe: 'off',
				cx: 'f34ee7434c6794ae2',
				searchType: 'image',
			},
		],
	},
	context: {
		title: 'Next Search Clone',
	},
	searchInformation: {
		searchTime: 0.513089,
		formattedSearchTime: '0.51',
		totalResults: '175520000000',
		formattedTotalResults: '175,520,000,000',
	},
	items: [
		{
			kind: 'customsearch#result',
			title:
				"Oregon Dropped Graduation Test Requirements. Here's What That ...",
			htmlTitle:
				'Oregon Dropped Graduation <b>Test</b> Requirements. Here&#39;s What That ...',
			link: 'https://media.wbur.org/wp/2020/05/pencil-standardized-test.jpg',
			displayLink: 'www.wbur.org',
			snippet:
				"Oregon Dropped Graduation Test Requirements. Here's What That ...",
			htmlSnippet:
				'Oregon Dropped Graduation <b>Test</b> Requirements. Here&#39;s What That ...',
			mime: 'image/jpeg',
			fileFormat: 'image/jpeg',
			image: {
				contextLink:
					'https://www.wbur.org/onpoint/2021/09/24/oregon-dropped-test-requirements-what-that-means-for-the-states-testing-future',
				height: 2000,
				width: 3000,
				byteSize: 382831,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAGYnLI8d9-xHV_uaWYEurMTVJ7AGVvUzlW1ZStE3Gl6cxUoX4ja-Xb0&s',
				thumbnailHeight: 100,
				thumbnailWidth: 150,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'QA Testing-as-a-Service | Test IO',
			htmlTitle: 'QA <b>Testing</b>-as-a-Service | <b>Test</b> IO',
			link: 'https://test.io/content/dam/test-io/homepage/products_mobile.png',
			displayLink: 'test.io',
			snippet: 'QA Testing-as-a-Service | Test IO',
			htmlSnippet: 'QA <b>Testing</b>-as-a-Service | <b>Test</b> IO',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://test.io/',
				height: 1954,
				width: 2813,
				byteSize: 170261,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVmLuvmYX1OkQlnl3wMyPIqI1n5Yp9CBi2MkAasbZ6qwqvvIZRY3Y2g&s',
				thumbnailHeight: 104,
				thumbnailWidth: 150,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Simple Strategies for Improving Your Test Performance',
			htmlTitle: 'Simple Strategies for Improving Your <b>Test</b> Performance',
			link: 'https://www.educationcorner.com/images/featured-improve-test-taking.jpg',
			displayLink: 'www.educationcorner.com',
			snippet: 'Simple Strategies for Improving Your Test Performance',
			htmlSnippet:
				'Simple Strategies for Improving Your <b>Test</b> Performance',
			mime: 'image/jpeg',
			fileFormat: 'image/jpeg',
			image: {
				contextLink:
					'https://www.educationcorner.com/test-performance-strategies.html',
				height: 630,
				width: 1200,
				byteSize: 75238,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QKJiWCA9vcO-ggebTUcPTm5RxjloqfgPJu--rZQkqoOiQWzKo51plw&s',
				thumbnailHeight: 79,
				thumbnailWidth: 150,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'File:Test-Logo.svg - Wikipedia',
			htmlTitle: 'File:<b>Test</b>-Logo.svg - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'File:Test-Logo.svg - Wikipedia',
			htmlSnippet: 'File:<b>Test</b>-Logo.svg - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/File:Test-Logo.svg',
				height: 359,
				width: 783,
				byteSize: 18453,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEB_vgxSYXM17R2TecfgQ_LRlHawkndz2bIvu9sTSGyjHvn0mJVgyyai4&s',
				thumbnailHeight: 66,
				thumbnailWidth: 143,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'How to Run a Usability Test in 5 Steps | Hotjar',
			htmlTitle: 'How to Run a Usability <b>Test</b> in 5 Steps | Hotjar',
			link: 'https://images.ctfassets.net/lh3zuq09vnm2/1ENjVxhiWtm7LCwLFhgiW9/3132b27acddbfab3131686ea80310fdc/conducting-usability-test_yon4BQT.svg',
			displayLink: 'www.hotjar.com',
			snippet: 'How to Run a Usability Test in 5 Steps | Hotjar',
			htmlSnippet: 'How to Run a Usability <b>Test</b> in 5 Steps | Hotjar',
			mime: 'image/svg+xml',
			fileFormat: 'image/svg+xml',
			image: {
				contextLink:
					'https://www.hotjar.com/usability-testing/process-examples/',
				height: 534,
				width: 800,
				byteSize: 14830,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpczjKb_aJx2VCQIA6ZWac2mK9OMHGhfZLD0SpPJ_wZkG0blqH7VEei4w&s',
				thumbnailHeight: 95,
				thumbnailWidth: 143,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'MCA Test Dates | article',
			htmlTitle: 'MCA <b>Test</b> Dates | article',
			link: 'http://resources.finalsite.net/images/v1645721429/rdaleorg/qblyqgwortzxvb3q4wct/testing.jpg',
			displayLink: 'mle.rdale.org',
			snippet: 'MCA Test Dates | article',
			htmlSnippet: 'MCA <b>Test</b> Dates | article',
			mime: 'image/jpeg',
			fileFormat: 'image/jpeg',
			image: {
				contextLink:
					'https://mle.rdale.org/discover/news/article/~board/meadow-lake-news/post/mca-test-dates',
				height: 720,
				width: 950,
				byteSize: 187360,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEsf68nn98o9Wz7qqz8I3Fr2huk29J3eELprQBq3-OYh-zt6W_za26Q&s',
				thumbnailHeight: 112,
				thumbnailWidth: 148,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'APEST Personal Vocational Assessment | 5Q Central',
			htmlTitle: 'APEST Personal Vocational Assessment | 5Q Central',
			link: 'https://5qcentral.com/wp-content/uploads/2018/12/tests.png',
			displayLink: '5qcentral.com',
			snippet: 'APEST Personal Vocational Assessment | 5Q Central',
			htmlSnippet: 'APEST Personal Vocational Assessment | 5Q Central',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://5qcentral.com/product/apest-vocational-assessment/',
				height: 1000,
				width: 1000,
				byteSize: 108382,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeBHF7YbM9a4-yMa-JIKKXj5YE2BBM0qRF0Yoo6qY95ARc52yvg_NloU&s',
				thumbnailHeight: 149,
				thumbnailWidth: 149,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'Autism tests | Embrace Autism',
			htmlTitle: 'Autism <b>tests</b> | Embrace Autism',
			link: 'https://embrace-autism.com/wp-content/uploads/Tests-DrNatalieEngelbrecht-Test2-hover.svg',
			displayLink: 'embrace-autism.com',
			snippet: 'Autism tests | Embrace Autism',
			htmlSnippet: 'Autism <b>tests</b> | Embrace Autism',
			mime: 'image/svg+xml',
			fileFormat: 'image/svg+xml',
			image: {
				contextLink: 'https://embrace-autism.com/autism-tests/',
				height: 800,
				width: 800,
				byteSize: 7556,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxvwcKn1VcBe5eHn5huG83zgHjykP5KsJ3KKfRwuojOu2ZnRYP53heoE&s',
				thumbnailHeight: 143,
				thumbnailWidth: 143,
			},
		},
		{
			kind: 'customsearch#result',
			title:
				'How to test a new business idea before implementation - HatRabbits',
			htmlTitle:
				'How to <b>test</b> a new business idea before implementation - HatRabbits',
			link: 'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg',
			displayLink: 'hatrabbits.com',
			snippet:
				'How to test a new business idea before implementation - HatRabbits',
			htmlSnippet:
				'How to <b>test</b> a new business idea before implementation - HatRabbits',
			mime: 'image/jpeg',
			fileFormat: 'image/jpeg',
			image: {
				contextLink:
					'https://hatrabbits.com/en/how-to-test-a-new-business-idea/',
				height: 444,
				width: 787,
				byteSize: 28847,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGtAbSzOmJsjh6XCRmITZkKQyv31a0wOHDOQmjo6SHe9_5eXekwH4qQ&s',
				thumbnailHeight: 81,
				thumbnailWidth: 143,
			},
		},
		{
			kind: 'customsearch#result',
			title: 'How the Coronavirus Is Pushing Colleges to Go Test-Optional',
			htmlTitle:
				'How the Coronavirus Is Pushing Colleges to Go <b>Test</b>-Optional',
			link: 'https://www.usnews.com/object/image/0000016f-a0be-d212-a16f-b3fe6be70000/200113-exam-stock.jpg?update-time=1578949904599&size=responsive640',
			displayLink: 'www.usnews.com',
			snippet: 'How the Coronavirus Is Pushing Colleges to Go Test-Optional',
			htmlSnippet:
				'How the Coronavirus Is Pushing Colleges to Go <b>Test</b>-Optional',
			mime: 'image/jpeg',
			fileFormat: 'image/jpeg',
			image: {
				contextLink:
					'https://www.usnews.com/education/best-colleges/articles/how-the-coronavirus-is-pushing-colleges-to-go-test-optional',
				height: 420,
				width: 640,
				byteSize: 31231,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rVnV35gYXERII2qW-LM7k9BD4QEoGc73NS0RIvYfXEfgaH2hFIwTWQo&s',
				thumbnailHeight: 90,
				thumbnailWidth: 137,
			},
		},
	],
};
