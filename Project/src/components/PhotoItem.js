import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PhotoItem = (props) => {
  const { navigate } = props.navigation
  return(
    <View style={styles.content}>
      <TouchableHighlight onPress={() => navigate('Detail', {detail: props.photo})}>
      <Image
          style={{width: deviceWidth * 0.327, height: '100%'}}
          source={{uri: props.photo.image_url}}
        />
      </TouchableHighlight>
    </View>
  )
}

const styles = {
  content: {
    marginLeft: 1,
    marginRight: 1,
    marginLeft: 1,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.327,
    height: deviceWidth * 0.327,
    borderWidth: 1,
    borderColor: 'white',
    position: 'relative'
  }
}

export default PhotoItem
