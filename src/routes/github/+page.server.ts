import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	throw redirect(300, 'https://github.com/itslevir');
}) satisfies PageServerLoad;
