import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  CameraRoll,
  Platform,
  Alert
} from 'react-native';

import { Icon, Col, Grid } from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob'; //library to save picture file

class Detail extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = { title : '700px' }

  saveToCameraRoll = (image) => {
    if (Platform.OS === 'android') {
      RNFetchBlob
      .config({
        fileCache : true,
        appendExt : 'jpg'
      })
      .fetch('GET', image.image_url)
      .then((res) => {
        CameraRoll.saveToCameraRoll(res.path())
          .then(Alert.alert('Success', 'Photo has been added to your Gallery!'))
          .catch(err => console.log('err:', err))
      })
    } else { //this else part is for iOS
      CameraRoll.saveToCameraRoll(image.image_url)
        .then(Alert.alert('Success', 'Photo has been added to your Gallery!'))
    }
  }

  render() {
    const {params} = this.props.navigation.state
    return(
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.header}>
            <Image
                style={{width:60, height: 60, borderRadius: 100}}
                source={{uri: params.detail.user.userpic_url}}
            />
            <Text style={styles.headerText}>{params.detail.user.fullname}</Text>
          </View>

          <TouchableHighlight
            onPress={() => this.saveToCameraRoll(params.detail)}
            underlayColor='transparent'
          >
            <Image
                style={{width:400, height: 400}}
                source={{uri: params.detail.image_url}}
            />
          </TouchableHighlight>

          <View style={styles.description}>
            <Text style={{fontSize: 20, fontWeight:'bold', marginBottom: 10}}>{params.detail.name}</Text>
            <View style={styles.spaced}>
              <Grid>
                <Col style={{flexDirection:'row', alignItems:'center'}}>
                  <Icon name="md-heart" style={{fontSize: 30, color:'red'}}/>
                  <Text style={{marginLeft:10}}>{params.detail.votes_count}</Text>
                </Col>
                <Col style={{flexDirection:'row', alignItems:'center'}}>
                  <Icon name="md-eye" style={{fontSize: 30}}/>
                  <Text style={{marginLeft:10}}>{params.detail.times_viewed}</Text>
                </Col>
              </Grid>
            </View>
            <Text>Camera: {params.detail.camera}</Text>
            <Text>ISO: {params.detail.iso}</Text>
            <Text>Focal Length: {params.detail.focal_length}</Text>
            <Text>Aperture: {params.detail.aperture}</Text>
            <Text>Shutter Speed: {params.detail.shutter_speed}</Text>
          </View>

        </ScrollView>
      </View>
    )
  } //END OF RENDER
}

const styles = {
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    marginLeft: 10,
    fontWeight:'bold',
    color: '#000'
  },
  description: {
    paddingLeft: 15,
    paddingTop: 15,
    marginBottom: 20
  },
  spaced: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

export default Detail
