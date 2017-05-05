import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { Col, Grid } from 'native-base';

class About extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = { title : 'About Me' }

  render() {
    const {params} = this.props.navigation.state
    return (
      <ScrollView>
        <Image
            style={{width:400, height: 200}}
            source={{uri: params.data.cover_url}}
        />
        <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row', marginTop: -50}}>
        <Image
            style={{width:100, height: 100, borderRadius: 100, borderWidth:2, borderColor:'white', }}
            source={{uri: params.data.userpic_url}}
        />
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:13}}>
          <Text style={{fontSize:20, color:'black'}}>{params.data.fullname}</Text>
          <Text style={{fontSize:13}}>{params.data.username}</Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:13, flexDirection:'row'}}>
          <Text>{params.data.followers_count} Followers - </Text>
          <Text>Following {params.data.friends_count}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default About
