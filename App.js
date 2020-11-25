import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk',
      img:
        'https://cdn.pixabay.com/photo/2017/08/31/12/32/milk-2700595__340.jpg',
    },
    {
      id: uuidv4(),
      text: 'Coffee',
      img:
        'https://cdn.pixabay.com/photo/2018/01/12/09/17/coffee-3077843__340.jpg',
    },
    {
      id: uuidv4(),
      text: 'Creamer',
      img:
        'https://cdn.pixabay.com/photo/2016/04/12/23/30/white-1325730__340.jpg',
    },
    {
      id: uuidv4(),
      text: 'Sugar',
      img:
        'https://cdn.pixabay.com/photo/2014/10/07/18/36/sugar-478159__340.jpg',
    },
    {
      id: uuidv4(),
      text: 'Cookies',
      img:
        'https://cdn.pixabay.com/photo/2016/03/18/02/16/cookies-1264263__340.jpg',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
