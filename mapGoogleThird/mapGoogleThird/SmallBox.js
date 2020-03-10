import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import CustomButton from './CustomButton';

export default class SmallBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                {/* <Text>Button here!</Text> */}
                <CustomButton
                    buttonColor={'yellow'}
                    title={'Home'}
                    onPress={() => {onPressed()}}
                />
                <CustomButton/>
            </View>
        )
    }
}

function onPressed() {
    alert('On pressed')
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})