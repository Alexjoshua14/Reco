import React from 'react';
import { View, Text, Image, List } from 'react-native';

const Profile = (props) => {
  let data = {
    followers: {
      text: 'Followers',
      quantity: 100,
    },
    following: {
      text: 'Following',
      quantity: 120,
    },
    crates: {
      text: 'Crates',
      quantity: 25,
    },
    records: {
      text: 'Records',
      quantity: 1000,
    },
  }

  const renderUserInfo = (data) => {
    return (
      <View>
        <Text>{data.text}</Text>
        <Text>{data.quantity}</Text>
      </View>
    )
  }

  return (
    <View style={{flexDirection: 'column'}}>

      {/*User info section */}
      <View style={{
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        justifyContent: 'space-evenly',
        height: 100,
        padding: 20}}>
        <View>
          <Text>Alex</Text>
          <Image source={{uri: 'https://unsplash.com/photos/fiCgwFIeVX0'}}/>
        </View>
        <View>
          <Text>{data.followers.text}</Text>
          <Text>{data.followers.quantity}</Text>
        </View>
        <View>
          <Text>{data.following.text}</Text>
          <Text>{data.following.quantity}</Text>
        </View>
        <View>
          <Text>{data.crates.text}</Text>
          <Text>{data.crates.quantity}</Text>
        </View>
        <View>
          <Text>{data.records.text}</Text>
          <Text>{data.records.quantity}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
        <Text> Welcome to Profile page! </Text>
      </View>
    </View>
  );
}

export default Profile;