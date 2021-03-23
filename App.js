import * as React from 'react';
import { Button, View , ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import News from './News';
import  LookTable  from './components/Table';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import Header from './components/Header';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="News">
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Table" component={LookTable} />
        <Drawer.Screen name="FAQ"  />
        <Drawer.Screen name="Contact"  />
      </Drawer.Navigator>
    </NavigationContainer>
    
    
    </>
  );
}