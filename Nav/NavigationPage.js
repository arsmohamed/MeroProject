import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Nav() {
    const NavBar = // Within your render function
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.text}>
      <Text style={styles.button}>
        Sign in with Facebook
      </Text>
    </LinearGradient>
    // <LinearGradient
    //     // Button Linear Gradient
    //     colors={['#4c669f', '#3b5998', '#192f6a']}
    //     style={styles.linearGradient}>
    //     <Text style={styles.buttonText}>Sign in with Facebook</Text>
    //     </LinearGradient>

    return (NavBar);
  }


// Later on in your styles..
const styles = StyleSheet.create({
    linearGradient: {
        // flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
      width: '30%',
      bottom: 1,
    },
  });
  