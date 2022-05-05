import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function List({e, deleteHandler}) {
  return (
<TouchableOpacity onPress={() => deleteHandler(e.key)}>
    <Text style={styles.text}> {e.text}</Text>
</TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
    text:{
      padding: 20,
      textAlign: 'center',
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 20,
      width: "60%",
      marginLeft: "20%",
      borderColor: "grey",
    }
});