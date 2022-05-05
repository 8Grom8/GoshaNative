import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: 'grey',
  },
  text: {
    fontsize: 22,
    color: 'red',
    textAlign: 'center',
    fontWeight: 700,
  },
});