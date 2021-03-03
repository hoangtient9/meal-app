import React, { useState } from 'react';
import { View, StyleSheet, Switch, Platform } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BodyText from '../components/BodyText';
import HeaderButton from '../components/HeaderButton';
import { DrawerActions } from 'react-navigation-drawer';
import Colors from '../constants/colors';

interface SwitchProps {
	state: boolean;
	onchange: (newValue: boolean) => void;
	title: string;
}

const FiltersSwitch: React.FC<SwitchProps> = ({ title, state, onchange }) => {
	return (
		<View style={styles.switchContainer}>
			<BodyText>{title}</BodyText>
			<Switch
				thumbColor={Colors.primaryColor}
				trackColor={{
					false: '',
					true: Platform.OS === 'android' ? Colors.primaryColor : '',
				}}
				value={state}
				onValueChange={onchange}
			/>
		</View>
	);
};

const FiltersScreen: NavigationStackScreenComponent = () => {
	const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
	const [isVegan, setIsVegan] = useState<boolean>(false);
	const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
	const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
	return (
		<View style={styles.screen}>
			<FiltersSwitch
				state={isGlutenFree}
				title="Gluten Free"
				onchange={(newValue) => {
					setIsGlutenFree(newValue);
				}}
			/>
			<FiltersSwitch
				state={isVegan}
				title="Vegan"
				onchange={(newValue) => {
					setIsVegan(newValue);
				}}
			/>
			<FiltersSwitch
				state={isVegetarian}
				title="Vegetarian"
				onchange={(newValue) => {
					setIsVegetarian(newValue);
				}}
			/>
			<FiltersSwitch
				state={isLactoseFree}
				title="Gluten Free"
				onchange={(newValue) => {
					setIsLactoseFree(newValue);
				}}
			/>
		</View>
	);
};

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Filters',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					iconName="ios-menu"
					title="menu"
					onPress={() => {
						navigation.dispatch(DrawerActions.toggleDrawer());
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginVertical: 10
	},
});

export default FiltersScreen;
