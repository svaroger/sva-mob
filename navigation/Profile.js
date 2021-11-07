import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.sectionDescription}>Report page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
