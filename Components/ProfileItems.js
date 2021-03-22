import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';

export default function ProfileItems({ name, value }) {

	return (
		<View style={ styles.container }>
			<Text style={styles.txt}>{name}</Text>
			<Text>{value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		margin: 8
	},
	txt:{
		fontWeight: 'bold',
		fontSize: 16,
		marginTop: 8
	}
});