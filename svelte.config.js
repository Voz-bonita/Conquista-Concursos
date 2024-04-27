import adapter from 'sveltekit-adapter-firebase';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter()
	}
};
