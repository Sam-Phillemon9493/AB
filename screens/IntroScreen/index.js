import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, Image, Button, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({...props}) => {
	return (
		<TouchableOpacity
			style={{marginHorizontal: 10}}
			{...props}
		>
			<Text style={{fontSize: 16}}> Skip </Text>

		</TouchableOpacity>
	);
}

const Next = ({...props}) => {
	return (
		<TouchableOpacity
			style={{marginHorizontal: 10}}
			{...props}
		>
			<Text style={{fontSize: 16}}> Next </Text>

		</TouchableOpacity>
	);
}

const Done = ({...props}) => {
	return (
		<TouchableOpacity
			style={{marginHorizontal: 10}}
			{...props}
		>
			<Text style={{fontSize: 16}}> Done </Text>

		</TouchableOpacity>
	);
}

const Dots = ({selected	}) => {
	let backgroundColor;
	backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
	return (
		<View
			style={{
					width: 5,
					height: 5,
					marginHorizontal: 3,
					backgroundColor
			}}
		>
		</View>
	);
}

const IntroScreen = ({navigation}) => {

return (
	<Onboarding
		DotComponent={Dots}
		NextButtonComponent={Next}
		SkipButtonComponent={Skip}
		DoneButtonComponent={Done}
		onSkip={()=> navigation.replace('LoginScreen')}
		onDone={()=> navigation.navigate('LoginScreen')}
		pages={[
			{
				backgroundColor: '#f47a60',
				image: <Image source={require('../../assets/1.png')} style={styles.image} />,
				title: 'Onboarding 1',
				subtitle: 'Done with React Native Onboarding Swiper',
			},
			{
				backgroundColor: '#a6e4d0',
				image: <Image source={require('../../assets/2.png')} style={styles.image} />,
				title: 'Onboarding 2',
				subtitle: 'Done with React Native Onboarding Swiper',
			},
			{
				backgroundColor: '#fdeb93',
				image: <Image source={require('../../assets/3.png')} style={styles.image} />,
				title: 'Onboarding 3',
				subtitle: 'Done with React Native Onboarding Swiper',
			}
			
		]}
	/>
)
}

const styles = StyleSheet.create({
		image: {
				width: 250,
				height: 250
		}
})
export default IntroScreen;
