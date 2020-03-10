import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import Map from "./Map";
import styled from "styled-components";

export default class App extends Component {
  state = {
    isLoaded: false,
    _lat: null,
    _lon: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        isLoaded: true,
        _lat: position.coords.latitude,
        _lon: position.coords.longitude
      });
    });
  }

  render() {
    const { isLoaded, _lat, _lon } = this.state;

    return (
      <View style={styles.container}>
        {isLoaded
          ? <View style={styles.secondContainer}>
              <Map style={styles.mapStyle} _latitude={_lat} _longitude={_lon} />
            </View>
          : <View style={styles.loading}>
              <Text style={styles.loadingText}>
                Getting the location. Please wait..
              </Text>
            </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    fontSize: 17,
    color: "black"
  },
  secondContainer: {
    flex: 1
  },
  mapStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
