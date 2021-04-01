import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import mealReducer from './reducers/meals';
import { meals } from './types';

interface RootState {
  meals: meals
}

const rootReducers = combineReducers({
	meals: mealReducer,
});



export const store = createStore(rootReducers);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

