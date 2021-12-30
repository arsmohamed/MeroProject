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
  console.log(animation)
  const [open, setOpen] = useState(0)
  const toggleMenu = () => {

      setChangeIcon(true)
  }
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
      style={[styles.NavIconStyle, styles.secondary]}
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
    },
    NavIconStyle: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      // position: 'absolute', 
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
  