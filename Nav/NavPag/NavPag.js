import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconII from 'react-native-vector-icons/Ionicons';
// import IconFA from 'react-native-vector-icons/FontAwesome5';

export default function NavPag() {

    const HomePageIcon = <View style={styles.NavIconStyle3}>
        <LinearGradient 
          start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
          locations={[0,0.25,0.95]} 
          colors={['#4651D5','#6548DE','#FF007A']} 
          style={styles.NavIconStyle}
        >
            {/* {NotePage} */}
          <Icon name="home" size={50} color="#94B3FD" />
      </LinearGradient>
    </View>

    const NotePageIcon = <View style={styles.NavIconStyle2}>
        <LinearGradient 
          start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
          locations={[0,0.25,0.95]} 
          colors={['#4651D5','#6548DE','#FF007A']} 
          style={styles.NavIconStyle}
        >
            {/* {NotePage} */}
          <IconMI name="speaker-notes" size={50} color="#94B3FD" />
      </LinearGradient>
    </View>

    const MealPageIcon = <View style={styles.NavIconStyle6}>
    <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={styles.NavIconStyle}
    >
      <IconII name="md-fast-food-outline" size={50} color="#94B3FD" />
      
    </LinearGradient>
  </View>
    const TaskPageIcon = <View style={styles.NavIconStyle4}>
    <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={styles.NavIconStyle}
    >
      <IconFA name="tasks" size={50} color="#94B3FD" />
      
    </LinearGradient>
  </View>
    const DiaryPageIcon = <View style={styles.NavIconStyle5}>
    <LinearGradient 
      start={{ x: 0.35, y: 0 }} and end={{ x: 0, y: 0.95 }}
      locations={[0,0.25,0.95]} 
      colors={['#4651D5','#6548DE','#FF007A']} 
      style={styles.NavIconStyle}
    >
      <IconFA name="journal-whills" size={50} color="#94B3FD" />
      
    </LinearGradient>
  </View>

    const CollectionIcon = <View style={styles.IconsPageAre}>
        {NotePageIcon}
        {MealPageIcon}
        {TaskPageIcon}
        {DiaryPageIcon}
        {HomePageIcon}
    </View>

    return (CollectionIcon);
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
        // bottom: 1,
        // margin: "5%",
        marginBottom: "2.5%",
        position: 'absolute',
        bottom:0,
        right:0, 
      },
      NavIconStyle2: {
        // bottom: 1,
        margin: "2.5%",
        marginRight: "10%",
        marginBottom: "5%",
        position: 'absolute',
        bottom:0,
        right:0, 
      },
      NavIconStyle3: {
        // bottom: 1,
        margin: "2.5%",
        marginBottom: "7.5%",
        position: 'absolute',
        bottom:"10%",
        right:0, 
      },
      NavIconStyle4: {
        // bottom: 1,
        margin: "2.5%",
        marginBottom: "10%",
        marginRight: "10%",
        position: 'absolute',
        bottom:"20%",
        right:0, 
      },
      NavIconStyle5: {
        // bottom: 1,
        margin: "2.5%",
        marginBottom: "10%",
        marginRight: "25%",
        position: 'absolute',
        bottom:"15%",
        right:0, 
      },
      NavIconStyle6: {
        // bottom: 1,
        margin: "2.5%",
        marginBottom: "2.5%",
        marginRight: "25%",
        position: 'absolute',
        bottom:"10%",
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
  