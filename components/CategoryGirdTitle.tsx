import React, { ComponentType } from 'react';
import {
	View,
	TouchableNativeFeedback,
	TouchableOpacity,
	StyleSheet,
	Platform,
	TouchableOpacityProps,
	TouchableNativeFeedbackProps,
} from 'react-native';
import BodyText from './BodyText';

interface props {
	title: string;
	color: string;
	onSelect: () => void;
}

const CategoryGirdTitle: React.FC<props> = ({ title, color, onSelect }) => {
	let Touchable: ComponentType<
		TouchableOpacityProps & TouchableNativeFeedbackProps
	> =
		Platform.OS === 'android' && Platform.Version >= 21
			? TouchableNativeFeedback
			: TouchableOpacity;

	return (
		<View style={styles.girdItem}>
			<Touchable background={TouchableNativeFeedback.SelectableBackground()} onPress={onSelect} style={{ flex: 1 }} activeOpacity={0.8}>
				<View style={{ ...styles.container, backgroundColor: color }}>
					<BodyText numberOfLines={2} style={styles.title}>
						{title}
					</BodyText>
				</View>
			</Touchable>
		</View>
	);
};
const styles = StyleSheet.create({
	girdItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 20,
		overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden': 'visible',
		elevation: 6,
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		padding: 10,
	},
	title: {
		fontSize: 22,
		fontFamily: 'open-sans-bold',
		textAlign: 'right',
	},
});
export default CategoryGirdTitle;
