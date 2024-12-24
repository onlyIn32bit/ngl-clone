import type { PageServerLoad } from './$types';
import { requestIp } from '../hooks.server';

export const load = (async () => {
	return { requestIp };
}) satisfies PageServerLoad;
