import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav/NavigationPage';

export default function App() {
  const NavBarAreaContainer = <View style={styles.SwitchArea}>
    <Text>Lets see</Text>
  </View> 
  return (
    <View style={styles.container}>
      {NavBarAreaContainer}
      <Nav style={styles.NavBarArea}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // padding: 20,
    flexDirection: 'column',
    backgroundColor: 'orange',
  },
  SwitchArea: {
    flex: 1, backgroundColor: "blue", marginBottom:20 , 
    height: 10
  },
  NavBarArea: {
    flex: 2, backgroundColor: "red", height: '90%'
  },
});
