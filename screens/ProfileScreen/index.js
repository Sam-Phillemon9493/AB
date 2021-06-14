import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Button, Avatar, Card, Title, Paragraph, List } from 'react-native-paper';

const ProfileScreen = ({navigation}) => {
   return(
      <View style={{ paddingTop: '5%', padding: '5%'}} >
         <Card 
            elevation={10} 
            mode="elevated"
            style={{ padding: 20, height: '100%'}}
         > 
            <Card.Content style={{ alignItems: "flex-start", justifyContent: "flex-start" }}> 
               <Text style={{ fontWeight: 'bold', fontSize: 30 }}> Sam Phillemon</Text>
               <Text style={ { fontWeight: 'bold', fontSize: 20} }>QED420</Text>
               <Text style={ { fontWeight: 'bold', fontSize: 20} }>9876405123</Text>

               <View style={{ width: '100%' }}>
                  <List.Item
                     title="January"
                     description="Rank: 01"
                     right={props => <List.Icon {...props} icon="folder" />}
                  />
                  <List.Item
                     title="February"
                     description="Rank: 32"
                     right={props => <List.Icon {...props} icon="folder" />}
                  />
                  <List.Item
                     title="March"
                     description="Rank: 05"
                     right={props => <List.Icon {...props} icon="folder" />}
                  />
                  <List.Item
                     title="April"
                     description="Rank: 07"
                     right={props => <List.Icon {...props} icon="folder" />}
                  />
                  <List.Item
                     title="May"
                     description="Rank: 08"
                     right={props => <List.Icon {...props} icon="folder" />}
                  />
               </View>
            </Card.Content>
         </Card>   
   
      </View>
   );
}

export default ProfileScreen;