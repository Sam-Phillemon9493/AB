/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './screens/LoginScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import WorksheetScreen from './screens/WorksheetScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IntroScreen from './screens/IntroScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


const MainTabNavigator = () => {
  
			<Tab.Navigator
					// initialRouteName = {PaymentScreen}
					barStyle={{ backgroundColor: '#694fad' }}  
					tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Worksheet" component={WorksheetScreen} />
				<Tab.Screen name="Payment" component={PaymentScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
   	 	</Tab.Navigator>
}




const App: () => Node = () => {
const [isFirstLaunch, setIsFirstLaunch] = useState(null);

useEffect( ( ) => {
	AsyncStorage.getItem('alreadyLaunched').then(value => {
			if ( value === null ) {
				console.log('AsynStorage:', value);
				AsyncStorage.setItem('alreadyLaunched', 'true');
				setIsFirstLaunch(true); 
			} else {
				setIsFirstLaunch(false);
			}
	})

}, []);

if ( isFirstLaunch === null) {
	return null;
} 	else if ( isFirstLaunch === true ) {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="IntroScreen"
						component={IntroScreen}
						options={{
							headerShown: false
						}}
					/>
					<Stack.Screen 
						name="LoginScreen"
						component={LoginScreen}
					/>
					<Stack.Screen 
						name="AuthenticationScreen"
						component={AuthenticationScreen}
					/>
				<Stack.Screen 
						name="TabsScreen"
						children={MainTabNavigator}
				/>
				</Stack.Navigator >
			</NavigationContainer>
		)
} else {
	return (
	<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen 
						name="LoginScreen"
						component={LoginScreen}
					/>
					<Stack.Screen 
						name="AuthenticationScreen"
						component={AuthenticationScreen}
					/>
				<Stack.Screen 
						name="TabsScreen"
						children={MainTabNavigator}
				/>
				</Stack.Navigator >
	</NavigationContainer>
	)
}

}


export default App;
