export interface meal {
	id: string;
	categoryIds: string[];
	title: string;
	affordability: string;
	complexity: string;
	imageUrl: string;
	duration: number;
	ingredients: string[];
	steps: string[];
	isGlutenFree: boolean;
	isVegan: boolean;
	isVegetarian: boolean;
	isLactoseFree: boolean;
}

export interface meals {
	meals: meal[] | [];
	filteredMeals: meal[] | [];
	favoritesMeals: meal[] | [];
}

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS'

export interface filter {
	glutenFree: boolean;
	lactoseFree: boolean;
	vegan: boolean;
	vegetarian: boolean;
}

export type mealsAction =
  | { type: 'TOGGLE_FAVORITE'; mealId: string }
  | { type: 'SET_FILTERS'; filters: filter}
