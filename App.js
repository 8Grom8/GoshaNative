import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';


export default function App() {

  const [listOfItems, setListOfItems] = useState([{text:"", key:""}]);
  const addHandler=(text) => {
    setListOfItems((list) => {
      return [
        {text: text, key:Math.random().toString(36).substring(7) },
        ...list
      ]
    }
    )
  };
  const deleteHandler = (key) => {
    setListOfItems((list) => {
    return list.filter((listOfItems) => listOfItems.key != key)
    })
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => {
        <List e={item} deleteHandler={deleteHandler}
        />}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
