import type { PageServerLoad } from './$types';

import * as db from '$lib/server/database.js';

export const load = (async ({cookies}) => {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

    return {
        todos: db.getTodos(id)
    };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	}
};