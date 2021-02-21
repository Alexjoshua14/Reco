import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  username: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },

  commentText: {
    color: 'black',
    fontSize: 14,
  },

  container: {
    flex: 1,
  },

  list: {
    padding: 10,
    justifyContent: 'space-between',
  },

  card: {
    height: 550,
    padding: 10,
    borderColor: 'red',
    borderWidth: 1.7,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  post_userInfo: {
    flex: .1,
    flexDirection: 'row',
    alignContent: 'flex-start',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1.7, 
  },

  post_userImage: {
    
  },

  post_username: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },

  post_timestamp: {
    alignSelf: 'flex-end',
    color: 'black',
    fontSize: 14,
  },

})

export default style;