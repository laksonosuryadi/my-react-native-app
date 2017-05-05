import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { Icon, Col, Grid } from 'native-base';

class Detail extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = { title : '700px' }

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
          <Image
              style={{width:400, height: 400}}
              source={{uri: params.detail.image_url}}
          />
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
  }

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
