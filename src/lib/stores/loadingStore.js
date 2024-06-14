import { writable } from 'svelte/store';
export const loadingStore = writable({ loading: false });

export const setLoading = () => {
	loadingStore.update(() => {
		return { loading: true };
	});
};

export const unsetLoading = () => {
	loadingStore.update(() => {
		return { loading: false };
	});
};
