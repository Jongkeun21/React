import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import SmallBox from './SmallBox';

export default class Map extends Component {
    static defaultProps = {
        _latitude: null,
        _longitude: null,
        _latitudeDelta: 0.0421,
        _longitudeDelta: 0.0421    
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView style={styles.container}
                    region={{
                        latitude: this.props._latitude,
                        longitude: this.props._longitude,
                        latitudeDelta: this.props._latitudeDelta,
                        longitudeDelta: this.props._longitudeDelta
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props._latitude,
                            longitude: this.props._longitude
                        }}
                    />
                </MapView>
                <SmallBox style={styles.smallBox}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    smallBox: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});