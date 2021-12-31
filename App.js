import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IconNav from './Navigation/NavigationPage';
import IconET from 'react-native-vector-icons/Entypo';
import IconAD from 'react-native-vector-icons/AntDesign';

export default class App extends Component {
  // <IconET name="dots-three-horizontal" size={25} color="#FFFF" />

  NavBar = () => <LinearGradient style={styles.NavBarStyle}
    start={{ x: 0.55, y: 0 }} and end={{ x: 0, y: 0.95 }}
    locations={[0,0.25,0.75]} colors={['#BAABDA', '#F38BA0','#39A2DB']}>
      <View style={styles.NavBarIconsStyle}>
        <IconET name="chevron-thin-left" size={25} color="#0F0E0E" style={{marginLeft: "2%"}}/>
        <IconET name="dots-three-vertical" size={25} color="#0F0E0E" style={{marginRight: "2%"}}/>
      </View>
    </LinearGradient> 
  
  MainContaint = () => <LinearGradient style={styles.MainContaintStyle}
      start={{ x: 0.95, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.65]} colors={['#39A2DB', '#F38BA0','#502064']}
    >
      <IconNav style={{bottom: "12%"}}/>
    </LinearGradient>
  
  ProfileBar = () => <LinearGradient style={styles.ProfileBarStyle}
      start={{ x: 0.55, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.75]} colors={['#BAABDA', '#F38BA0','#39A2DB']}
    >
      <View style={styles.ProfileBarIconsStyle}>
        <IconET name="home" size={35} color="#0F0E0E" style={{marginLeft: "25%"}}/>
        <IconAD name="setting" size={35} color="#0F0E0E" style={{marginRight: "25%"}}/>
      </View>
    </LinearGradient>
  
  
  ContainerArea = () => <View style={styles.container}>
      {this.NavBar()}
      {this.MainContaint()}
      {this.ProfileBar()}
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
  NavBarIconsStyle: {
    width: "100%",
    height: "60%",
    // backgroundColor: "blue",
    marginTop: "8%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ProfileBarIconsStyle: {
    width: "100%",
    height: "75%",
    // backgroundColor: "blue",
    marginBottom: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  MainContaintStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
  },
  ProfileBarStyle: {
    width: "100%",
    height: "8%",
  },
});
