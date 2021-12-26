import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav/NavigationPage';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const NavBar = <View style={styles.NavBarStyle}>
      <Text>Lets see</Text>
    </View> 
  
  const NotiPage = <LinearGradient 
    start={{ x: 0.95, y: 0 }} and end={{ x: 0, y: 0.95 }}
    locations={[0,0.25,0.65]} 
    colors={['#39A2DB', '#F38BA0','#502064']}
    style={styles.NotiPageStyle}
  >
      <Nav 
        style={styles.NavIconStyle}
      /> 
  </LinearGradient>
  
  const ContainerArea = <View style={styles.ContainerAreaStyle}>
      {NavBar}
      {NotiPage}
    </View>

  return (ContainerArea);
}

const styles = StyleSheet.create({
  ContainerAreaStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: "100%",
    // backgroundColor: 'orange', //to check the location and how much it covers
  },
  NavBarStyle: {
    width: "100%",
    height: "8%",
    backgroundColor: "blue",
  },
  NotiPageStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: "red",
  },
});
