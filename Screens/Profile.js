import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';

import ProfileItems from '../components/ProfileItems';

export default function Profile() {

	return (
		<View style={{ flex:1 }}>

			<Image 
				style={{ height: 200 }}
				source={{ uri: require('../assets/profile.jpg') }}
			/>

			<ProfileItems name="UserName" value="Mahdi Hassani" />
			<ProfileItems name="Phone" value="+93780088163" />
			<ProfileItems name="Address" value="Herat" />
			<ProfileItems name="Gmail" value="hassani@mail.com" />

		</View>
	);
}

const styles = StyleSheet.create({

});