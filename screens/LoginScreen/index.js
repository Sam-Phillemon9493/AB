import React, { useEffect, useState } from 'react';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const LoginScreen = ({ navigation }) => {
	const [data, setData] = useState([]);
	const [text, setText] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [error, setError] = useState('');
	const [errorMsg, setErrorMsg] = useState(false);
	const { colors } = useTheme();
	const [confirm, setConfirm] = useState(null);
	
	useEffect(() => {
    	fetch('https://demo.accunityservices.com/abacuscrm/public/api/student/ON-AP21000061/details')
      	.then((response) => response.json())
      	.then((json) => setData(json))
      	.catch((error) => console.error(error))
      	.finally(() => setLoading(false));
			setText('');
			setMobileNumber('');
			setError('');
			
  	}, []);


	const handleChangeText = (text) => {		
			setText(text);
			// console.log('text:', text);
			if(text === data.admission_number) {
				let studentPaymentDueDate = new Date(data.due_fee_payment_date);
				let todayDate = new Date();
				let formatDate = todayDate.getUTCDate()+ '-' + todayDate.toLocaleString('en-us', { month: 'short' })+ '-' + todayDate.getUTCFullYear(); 
				todayDate = new Date(formatDate);
				// data.contact_one = '+91 9566110627';
				console.log('studentPaymentDueDate:', studentPaymentDueDate, ' todayDate =>', todayDate);
				if ( studentPaymentDueDate < todayDate ) { 
					if ( data.contact_one === '' || data.contact_one === undefined || data.contact_one === null ) {
						setMobileNumber('Mobile Number is not present')
					} else {
						// setMobileNumber('+91'+data.contact_one);
						setMobileNumber('+91 1234567890');
						console.log('text:', mobileNumber);

						setErrorMsg(false);

					}
				} else {
					setError('Your account is INACTIVE. Please pay the remaining amount to resume.');
					setErrorMsg(true);
				}
			} else {
				setMobileNumber('');
			}
		

	}

	const handleButtonPressed = async () => {
		
		if(!text.trim()) {
			setError('User ID is Mandatory!');
			setErrorMsg(true);
		} else {
			setErrorMsg(false);
			navigation.navigate('AuthenticationScreen', { phoneNumber: mobileNumber });
			setText('');
			setMobileNumber('');
		}
	}

	return (
	<KeyboardAwareScrollView>
    <View style={{
		  paddingTop: '25%'
    }}>
      <TextInput
        	label="USER ID"
			theme={{ roundness: 10}} 
        	style={styles.userInputStyle}
			outlineColor={ (errorMsg !== false) ? "red" : null }
        	mode = "outlined"
			clear = {true}
        	value={text}
        	onChangeText={text => handleChangeText(text)}
        	// onChangeText={text => handleChangeText('ON-AP21000061')}
			onFocus={()=> {
					setError(false);
					setErrorMsg(false);
			}}
      />
		<HelperText
          type="error"
          visible={true}
        >
         {error}
      </HelperText>
      <TextInput
        	label="MOBILE NUMBER"
        	mode = "outlined"
			theme={{ roundness: 10}} 
         style={{
            backgroundColor: "white",
            padding: 10,           
            paddingTop: 0       
        	}}
			keyboardType = "numeric"
       	value={mobileNumber}
			disabled = {true}
      />
      <View style={{padding: '6%'}}>
		  	<Button style={{ padding: 5, height: '45%', backgroundColor: "green"}} 
				theme={{ roundness: 25}} 
				mode="contained" 
				labelStyle={{textAlign: "center", fontSize: 18}}
				onPress={handleButtonPressed}
			>
  			  Send An SMS
 	  		</Button>
     </View>
    </View>
	</KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
	userInputStyle: {		
		backgroundColor: "white",
		padding: 10,           
      
	},
	error: {
		borderColor: "red",
		borderWidth: 1,
		padding: 10
	}

})

export default LoginScreen;