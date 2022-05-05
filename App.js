import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import LoginScreen from './components/screens/auth/loginScreen';
import RegistrationScreen from './components/screens/auth/registarationScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();

export default function App() {

  const [listOfItems, setListOfItems] = useState("");
  const addHandler=(text) => {
    setListOfItems((list) => {
      return [
        {text: text, key:Math.random().toString(36).substring(7) },
        ...list]
    })
  };
  const deleteHandler = (key) => {
    setListOfItems((list) => {
    return list.filter(listOfItems => listOfItems.key != key)
    });
  }

  // return (
  //   <View>
  //     <Header />
  //     <Form addHandler={addHandler}/>
  //     <View>
  //       <FlatList data={listOfItems} renderItem={({item}) => (
  //       <List e={item} deleteHandler={deleteHandler}
  //       />)} />
  //     </View>
  //   </View>
  // );
  return (
    <NavigationContainer>
     <AuthStack.Navigator>
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
     </AuthStack.Navigator>
    </NavigationContainer>
  );
}

