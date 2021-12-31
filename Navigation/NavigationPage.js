import  React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconII from 'react-native-vector-icons/Ionicons';

export default function Nav (props) {

  /********************************************  Icon Chnage Function *********************************************************/
  
  /********************************************  Animation Function *********************************************************/

  const animation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change animation value to 1 in 5 seconds
    Animated.timing(animation, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    // Will change animation value to 0 in 3 seconds
    Animated.timing(animation, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  const [ChangeIcon, setChangeIcon] = useState(false); // to change the icon 
  const [Open1, setOpen] = useState(0); // to change open value 
  
  const toggleMenu = () => {
    Animated.spring( animation, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true 
    }).start(); 
    setChangeIcon(true)
    setOpen(1)  
  }
  const chooseIcon = (props) => {
    setChangeIcon(false)
    setOpen(0) 
    // console.log(props)
    setChosenPage(props)
  }
  const [ChoosePage, setChosenPage] = useState("home");
  console.log(ChoosePage)
  const SelectedPage = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={[styles.NavIconStyle, Open1 ? styles.secondary: null]} 
    >
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View >
          {/* <Icon name={ChoosePage} size={50} color="#94B3FD" />  */}
          
        {ChoosePage === "home" ? <Icon name={ChoosePage} size={50} color="#94B3FD" /> :
            ChoosePage === "journal-whills" ? <IconFA name={ChoosePage} size={40} color="#94B3FD" /> :
            ChoosePage === "tasks" ? <IconFA name={ChoosePage} size={40} color="#94B3FD" />:
            ChoosePage === "speaker-notes" ? <IconMI name={ChoosePage} size={40} color="#94B3FD" />:
            ChoosePage === "md-fast-food-outline" ? <IconII name={ChoosePage} size={40} color="#94B3FD" />: 
            <Icon name="home" size={50} color="#94B3FD" />}       
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 
    
            
  
  const AddIcon = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={styles.NavIconStyle} 
    >
      <TouchableWithoutFeedback onPress={chooseIcon}>
        <Animated.View >
          <Icon name="plus" size={50} color="#94B3FD" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  /********************************************  Notification Icons *********************************************************/

  const Home = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary, {transform: [{ translateY: 245 },  {translateX: -120 }] }]}
    >
      <TouchableWithoutFeedback onPress={()=>chooseIcon("home")}>
        <Animated.View >
        <Icon name="home" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Diary = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary, {transform: [{ translateY: -35 }] }]}
    >
      <TouchableWithoutFeedback onPress={()=> chooseIcon("journal-whills")}>
        <Animated.View >
        <IconFA name="journal-whills" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 
  
  const Task = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary, {transform: [{ translateY: 50 },  {translateX: -70 }] }]}
    >
      <TouchableWithoutFeedback onPress={()=> chooseIcon("tasks")}>
        <Animated.View >
        <IconFA name="tasks" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Note = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary, {transform: [{ translateY: 200 },  {translateX: -70 }] }]}
    >
      <TouchableWithoutFeedback onPress={()=> chooseIcon("speaker-notes")}>
        <Animated.View >
        <IconMI name="speaker-notes" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

  const Meal = <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#1C84E4','#1C84DB','#21D7FF']} 
      style={[styles.NavIconStyle, styles.secondary, {transform: [{ translateY: 275 },  {translateX: 0 }] }]}
    >
      <TouchableWithoutFeedback onPress={()=> chooseIcon("md-fast-food-outline")}>
        <Animated.View >
        <IconII name="md-fast-food-outline" size={30} color="#FFFF" />
        </Animated.View>
      </TouchableWithoutFeedback> 
    </LinearGradient> 

    const NavIcon = <SafeAreaView style={[styles.IconsPageAre, props.style]}>
      {
      Open1? 
      [
        Home,
        Meal, 
        Note, 
        Task, 
        Diary
      ]
       : null
       }
      
      {ChangeIcon ? AddIcon : SelectedPage}
    </SafeAreaView>

    return (NavIcon);
  }


// Later on in your styles..
const styles = StyleSheet.create({
    IconsPageAre: {
      alignItems: "center",
      position: "absolute",
      right: "0%"
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
      shadowOffset: { height: 10},
      right: "20%"
    },
    secondary: {
      width: 48,
      height: 48,
      borderRadius: 48 / 2
    },
    DiaryStyle:{
      marginBottom: "25%"
    },
  });
  