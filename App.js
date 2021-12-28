import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IconNav from './Navigation/NavigationPage';

export default class App extends Component {

  NavBar = () => <View style={styles.NavBarStyle}>
      <Text style={{marginTop: "10%", marginLeft: "45%", color: "white"}}>Lets see</Text>
    </View> 
  
  MainContaint = () => <LinearGradient style={styles.MainContaintStyle}
      start={{ x: 0.95, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.65]} colors={['#39A2DB', '#F38BA0','#502064']}
    >
      <IconNav style={{bottom: "10%"}}/>
    </LinearGradient>
  
  
  ContainerArea = () => <View style={styles.container}>
      {this.NavBar()}
      {this.MainContaint()}
    </View>


  render() {
    return (this.ContainerArea());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: "100%",
    backgroundColor: 'orange', //to check the location and how much it covers
  },
  NavBarStyle: {
    width: "100%",
    height: "8%",
    backgroundColor: "blue",
  },
  MainContaintStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
