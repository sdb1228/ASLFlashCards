import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default React.createClass({
  render() {
    const navigationOptions = {
      title: 'Welcome',
    };
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Cards', { name: 'Jane' })
        }
      />
    );
  }
})
