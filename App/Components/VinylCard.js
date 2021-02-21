import React from 'react';
import { View, Image, Text, Button } from 'react-native'; 
import { FlatList } from 'react-native-gesture-handler';
import style from '../Styles/style';

/* 
*  VinylCard is used to disply an individual post with comments 
*  and has functionality such as liking and playing a snippet
*/
const VinylCard = ({ item }) => {
  //Need some API component to submit comment to
  clickToComment = () => {

  };

  //Need access to the song and the Discogs API
  clickToPlay = () => {

  };

  // Item needs username and commentText
  renderComment = (comment) => {
    return (
      <Comment 
        item={comment}
      />
    )
  }

  return (
    <View style={style.card}>
      {/* User information and timestamp*/}
      <View style={style.post_userInfo}>
        {/*User profile image */}
        {/* <Image source={item.user.image} style={style.post_userImage}/> */}
        <Text style={style.post_username}>{item.user.username}</Text>
        <Text style={style.post_timestamp}>{item.post.time}</Text>
      </View>

      {/* Vinyl cover image */}
      {/* <Image source={item.post.vinyl.coverArt}/> */}

      {/* Info about the vinyl record */}
      <View>
        {/*Comment button */}
        {/*Should make a new component to further customize this feature */}
        <Button 
          title="Comment"
          onPress={clickToComment}
          accessibilityLabel="Click this to post a comment"
          />
        {/*Vinyl information */}
        <Text>{item.post.vinyl.name} - {item.post.vinyl.artist}</Text>
        <Button 
          title="Play"
          onPress={clickToPlay}
          accessibilityLabel="Click this to play a snippet of the vinyl record"
        />
      </View>

      {/*Comments Section */}
      <View>
        <FlatList 
          data={item.post.comments}
          renderItem={renderComment}
          // keyExtractor={}

        />
      </View>
    </View>
  )
}

export default VinylCard;