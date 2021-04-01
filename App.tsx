import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigation from './navigation/MealsNavigation';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './store/store';

enableScreens();

const App = () => {
	const [loaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!loaded) {
		return <AppLoading />;
	}
	return (
		<Provider store={store}>
			<MealsNavigation />
		</Provider>
	);
};

export default App;
