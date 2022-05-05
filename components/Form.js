import React, { useState }from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Form({addHandler}) {

    const [text, value] = useState("");
    const onChange = (text) => {value(text)};

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange}/>
        <Button color="green" onPress={() => addHandler(text)}  title="Add"/>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderColor: "#fff",
        padding: 15,
        marginVertical: 25,
        marginHorizontal: "25%",
        width: "50%"
    }
});