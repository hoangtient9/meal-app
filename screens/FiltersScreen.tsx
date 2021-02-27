import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BodyText from '../components/BodyText';
import HeaderButton from '../components/HeaderButtons';
import { DrawerActions } from 'react-navigation-drawer';

const FiltersScreen: NavigationStackScreenComponent = () => {
	return (
		<View style={styles.screen}>
			<BodyText>The Filter Screen!</BodyText>
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
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FiltersScreen;
