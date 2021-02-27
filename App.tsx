import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import BodyText from './components/BodyText';
import MealsNavigation from './navigation/MealsNavigation';
import { enableScreens } from 'react-native-screens';

enableScreens();

const App = () => {
	const [loaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!loaded) {
		return <AppLoading />;
	}
	return <MealsNavigation />;
};

export default App;
