import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Appbar, Button, Avatar, Card, Title, Paragraph } from 'react-native-paper';


const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');

const PaymentScreen = ({navigation}) => {
   return(
      <SafeAreaView>
         <View style={{ paddingTop: '5%'}} >
         <View style={{ border: 1,  borderBottomWidth: 1, width: '100%', alignItems: "center"}}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, padding: 10, paddingTop:0}}> PAYMENT SUMMARY </Text>
         </View>
         <View style={{paddingTop: 20, padding: '5%'}}>
         <Card 
            elevation={10} 
            mode="elevated"
            style={{ padding: 20, alignItems: "center", justifyContent: "center", height: '92%'}}
         > 
            <Card.Content style={{alignItems: "center", justifyContent: "center"}}> 
               <Text style={ { fontWeight: 'bold', fontSize: 16, padding: 2, paddingTop:50 } }>
                  Account Status: 
                  {/* <View style={{border: 1, borderWidth: 1}}>  */}
                  <Text style={ { fontWeight: 'bold', fontSize: 15, color: "green"} }> 
                     Active 
                  </Text>
                  {/* </View> */}
               </Text>
               <Text style={ { fontWeight: 'bold', fontSize: 16, padding: 2 } }>
                  Last Payment: 
                  <Text style={ { fontWeight: 'bold', fontSize: 15, padding: 2, color: "green"} }>
                     05/May/2021
                  </Text>
               </Text>
               <Text style={ { fontWeight: 'bold', fontSize: 16, padding: 2 } }>
                  Payment Due On: 
                  <Text style={ { fontWeight: 'bold', fontSize: 15, padding: 2, color: "green"} }>
                     05/June/2021
                  </Text>
               </Text>
            </Card.Content>
         </Card> 
         </View>  
         </View>
      </SafeAreaView>
   );
}

export default PaymentScreen;