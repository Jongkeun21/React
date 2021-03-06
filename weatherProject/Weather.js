import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
// LinearGradient can take 2 colors or more
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
    render() {
        return(
            <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color='white' size={100} name='ios-rainy'/>
                    <Text style={styles.temperature}>Temperature here</Text>
                </View>

                <View style={styles.lower}>
                    <Text style={styles.title}>Raining a lot</Text>
                    <Text style={styles.subTitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperature: {
        fontSize: 40,
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 50
    },
    title: {
        fontSize: 25,
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subTitle: {
        fontSize: 17,
        color: 'white',
        marginBottom: 100
    }
})