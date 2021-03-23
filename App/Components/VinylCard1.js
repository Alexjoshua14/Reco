import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, 
        CardItem, Thumbnail, Text, Button, 
        Icon, Left, Body, Right} 
        from 'native-base';

  /** Redoing Vinyl card using Nativebase.io library */
VinylCard1 = ({ item }) => {
  return (
    <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'Image URL'}} />
            <Body>
              <Text>{item.user.username}</Text>
              {/* <Text note>GeekyAnts</Text> */}
            </Body>
          </Left>
          <Right>
            <Body>
              <Text>{item.post.date}</Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>
  )
}