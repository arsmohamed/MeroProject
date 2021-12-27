import  React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavPag from './NavPag/NavPag';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Nav() {

  const [IconClicked, setIconClicked] = useState(false); 

    const NavIcon = <View style={styles.IconsPageAre}>
      <NavPag/>
      <View style={styles.NavIconStyle1}>
        <LinearGradient 
          start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
          locations={[0,0.25,0.95]} 
          colors={['#4651D5','#6548DE','#FF007A']} 
          style={styles.NavIconStyle}
        >
          <Icon name="home" size={50} color="#94B3FD" />
          
        </LinearGradient>
      </View>
    </View>

    return (<NavPag/>);
  }


// Later on in your styles..
const styles = StyleSheet.create({
    IconsPageAre: {
      display: 'flex',
      width: "100%",
      height: "100%",
      position: 'absolute',
    },
    NavIconStyle1: {
      bottom: 1,
      margin: "2.5%",
      marginBottom: "12.5%",
      position: 'absolute',
      bottom:0,
      right:0, 
    },
    NavIconStyle: {
      width: 80,
      height: 80,
      borderRadius: 80 / 2, 
      alignItems: 'center',
    justifyContent: 'center',
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 50,
    },
  });
  