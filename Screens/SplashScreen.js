import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

const SplashScreen = () => {
    const [animation] = useState(new Animated.Value(-100)); // Initial position of logo (above the screen)

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 0, // Final position of logo (center of the screen)
                duration: 1000, // Duration of animation in milliseconds
                useNativeDriver: true // Enable native driver for smoother animation
            }
        ).start(); // Start the animation
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('./NGShow.png')}
                style={[styles.logo, { transform: [{ translateY: animation }] }]} // Apply translateY animation
            />

            <Text style={{ color: '#ffff', fontWeight:'bold', fontSize:30 , marginTop:40, textAlign:'center', width:'80%'}}>NewGold (Promoting Cultures Globally)</Text>
            {/* <Image
                source={require('./NewGoldStore.png')}
                style={styles.image}
                resizeMode='contain'
                

            /> */}

        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: undefined,
        aspectRatio: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#4b1a71',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200, // Adjust width and height of logo as needed
        height: 200 // Adjust width and height of logo as needed
    }
});

export default SplashScreen;
