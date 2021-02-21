import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import VinylCard from '../Components/VinylCard';
import { HomeScreenData } from '../Resources/placeholder_data/HomeScreenData';
import style from '../Styles/style';

//Home screen is going to need to fetch data from who the user is following
// 
const DATA = [
  {
    user: "John",
  },
  {
    user:  "Lilly",
  },
  {
    user:  "Sabrine",
  },
  {
    user:  "Jane", 
  },
  {
    user: "Oliver", 
  },
  {
    user: "Sheela"
  }
];

const Testing = ({ name }) => (
  <Text>{name.user}</Text>
);

const HomeScreen = () => {
  const renderPost = ({ post }) => (
    <Text>{post}</Text>
    //<VinylCard post={post} />
  );

  return (
    <SafeAreaView style={style.container}>
      <FlatList 
        data={HomeScreenData}
        renderItem={({item}) => <VinylCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={style.list}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;