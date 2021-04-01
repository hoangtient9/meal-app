import { meals, meal } from '../types';
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS,  mealsAction} from '../types';

const initialState: meals = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoritesMeals: [],
};

const mealsReducer = (
	state = initialState,
	action: mealsAction
) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const exitingMeal = state.favoritesMeals.findIndex((meal) => {
				return meal.id === action.mealId;
			});
			if (exitingMeal >= 0) {
				const updatedMeals = [...state.favoritesMeals];
				updatedMeals.splice(exitingMeal, 1);
				return {
					...state,
					favoritesMeals: updatedMeals,
				};
			} else {
				const meal = state.meals.find((meal) => meal.id === action.mealId);
				return {
					...state,
					favoritesMeals: [...state.favoritesMeals, meal],
				};
			}
			break;
		case SET_FILTERS:
			const appliedFilters = action.filters;
			const newMeals = state.meals.filter((meal) => {
				if (appliedFilters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (appliedFilters.vegan && !meal.isVegan) {
					return false;
				}
				if (appliedFilters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				return true;
			});
			return {
				...state,
				filteredMeals: newMeals
			}
			break;

		default:
			return state;
			break;
	}
};

export default mealsReducer;
