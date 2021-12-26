import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Nav() {
    const NavIcon = <View style={styles.NavIconStyle1}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.NavIconStyle}>
      <Text style={styles.button}>
        Sign in with Facebook
      </Text>
    </LinearGradient>
    </View>
    // <LinearGradient
    //     // Button Linear Gradient
    //     colors={['#4c669f', '#3b5998', '#192f6a']}
    //     style={styles.linearGradient}>
    //     <Text style={styles.buttonText}>Sign in with Facebook</Text>
    //     </LinearGradient>

    return (NavIcon);
  }


// Later on in your styles..
const styles = StyleSheet.create({
    NavIconStyle1: {
      // backgroundColor: 'transparent',
      // fontSize: 15,
      // color: '#fff',
      // width: '30%',
      bottom: 1,
      margin: "2.5%",
      marginBottom: "12.5%",
      position: 'absolute',
      bottom:0,
      right:0,
      // width: 100,
      // height: 100,
      // borderRadius: 100 / 2,
      // backgroundColor: "red",
    },
    NavIconStyle: {
      // backgroundColor: 'transparent',
      // fontSize: 15,
      // color: '#fff',
      // width: '30%',
      // bottom: 1,
      // margin: "7.5%",
      // marginBottom: "15%",
      // position: 'absolute',
      // bottom:0,
      // right:0,
      width: 80,
      height: 80,
      borderRadius: 80 / 2,
      // backgroundColor: "red",
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 50,
    },
  });
  