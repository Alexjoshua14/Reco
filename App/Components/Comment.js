import React from 'react';
import style from '../Styles/style.js'

Comment = (comment) => {
  return (
    <View>
      <Text style={style.username}>{comment.user} </Text>
      <Text style={style.commentText}>{comment.text}</Text>
    </View>
  )
}