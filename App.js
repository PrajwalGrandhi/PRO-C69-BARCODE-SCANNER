import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createBottomTabNavigator,createMaterialTopTabNavigator,
  createMaterialBottomTabNavigator,createTopTabNavigator } from 'react-navigation-tabs';
import Scanscreen from './screens/ScanScreen';

export default class App extends React.Component{
  render() {
    return (
    <View style={styles.container}>
      <Appcontainer/>
    </View>
    );
  }
}

var switchContainer = createMaterialTopTabNavigator({
  ScanScreen : {screen:Scanscreen},

})
const Appcontainer = createAppContainer(switchContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
