import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippet: [
			{
				title: 'Codes Snippet',
				language: 'HTML',
				code: `<div>This is a div</div>`,
				favorite: false,
			},
			{
				title: 'Cooper Codes Snippet',
				language: 'html',
				code: `<div>This is a div</div>`,
				favorite: false,
			}
		]
	};
}) satisfies PageLoad;
