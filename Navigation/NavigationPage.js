import  React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconII from 'react-native-vector-icons/Ionicons';

export default function Nav (props) {

  /********************************************  Icon Chnage Function *********************************************************/
  
  /********************************************  Animation Function *********************************************************/
  const [ChangeIcon, setChangeIcon] = useState(false); // to change the icon 
  const animation = useRef(new Animated.Value(0)).current;
  const mode = new Animated.Value(0);
  const buttonSize = new Animated.Value(1);

  const [open, setOpen] = useState(0)
  const mero = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
          toValue: 0.95,
          duration: 200
      }),
      Animated.timing(buttonSize, {
          toValue: 1
      }),
      Animated.timing(mode, {
          toValue: mode._value === 0 ? 1 : 0
      })
    ]).start();
    // const toValue = open ? 0 : 1;
    
    //   Animated.spring( animation, {
    //     toValue,
    //     friction: 5
    //   }).start();
    //   setOpen(!open);
    //   setChangeIcon(true)
  }
  // const pinStyle = {
  //   transform: [
  //     {scale: mero},
  //     {
  //       translateY: mero.interpolate({
  //         inputRange: [0,1],
  //         outputRange: [0,-80]
  //       })
  //     }
  //   ]
  // }
  /********************************************  animation Icons *********************************************************/
  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100]
  });

  const thermometerY = mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
  });

  const timeX = mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24]
  });

  const timeY = mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150]
  });

  const pulseX = mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50]
  });

  const pulseY = mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
  });

  const rotation = mode.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "45deg"]
  });

  const sizeStyle = {
      transform: [{ scale: buttonSize }]
  };
  /********************************************  Notification Icons *********************************************************/
  const AddIcon = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={styles.NavIconStyle} 
    >
      <TouchableWithoutFeedback onPress={()=>setChangeIcon(false)}>
        <Animated.View >
          <Icon name="plus" size={50} color="#94B3FD" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Home = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={styles.NavIconStyle} 
    >
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View >
          <Icon name="home" size={50} color="#94B3FD" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Diary = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary, {left: thermometerX, top: thermometerY}]}
    >
      <TouchableWithoutFeedback>
        <Animated.View >
        <IconFA name="journal-whills" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 
  
  const Task = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary]}
    >
      <TouchableWithoutFeedback>
        <Animated.View >
        <IconFA name="tasks" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Note = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary]}
    >
      <TouchableWithoutFeedback>
        <Animated.View >
        <IconMI name="speaker-notes" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Meal = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary]}
    >
      <TouchableWithoutFeedback>
        <Animated.View >
        <IconII name="md-fast-food-outline" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

    const NavIcon = <View style={[styles.IconsPageAre, props.style]}>
      {Meal}{Note}{Task}{Diary}{ChangeIcon ? AddIcon : Home}
    </View>

    return (NavIcon);
  }


// Later on in your styles..
const styles = StyleSheet.create({
    IconsPageAre: {
      alignItems: "center",
      position: "absolute",
      // bottom: 0
      // display: 'flex',
      // width: "100%",
      // height: "100%",
      // position: 'absolute',
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
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      position: 'absolute', 
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 10,
      shadowColor: "#F02A4B",
      shadowOffset: 0.3,
      shadowOffset: { height: 10}
    },
    menu: {
      backgroundColor: "#F82A4B"
    },
    secondary: {
      width: 48,
      height: 48,
      borderRadius: 48 / 2
    }
  });
  