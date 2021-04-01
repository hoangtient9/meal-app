import { TOGGLE_FAVORITE, SET_FILTERS, filter } from '../types';

export const toggleFavorite = (mealId: string) => {
	return { type: TOGGLE_FAVORITE, mealId: mealId };
};

export const setFilters = (filterSetting: filter) => {
	return {
		type: SET_FILTERS,
		filters: filterSetting,
	};
};
