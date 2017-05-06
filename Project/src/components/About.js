import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import { Col, Grid } from 'native-base';
import { fetchMyPhoto } from '../actions'
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class About extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = { title : 'About Me' }

  // componentDidMount() {
  //   this.props.fetchMyPhoto()
  // }

  render() {
    const {params} = this.props.navigation.state
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        <Image
            style={{width:400, height: 200}}
            source={{uri: params.data.cover_url}} />
        <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row', marginTop: -50}}>
          <Image
              style={{width:100, height: 100, borderRadius: 100, borderWidth:2, borderColor:'white'}}
              source={{uri: params.data.userpic_url}}/>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:13}}>
          <Text style={{fontSize:20, color:'black'}}>{params.data.fullname}</Text>
          <Text style={{fontSize:13}}>{params.data.username}</Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:13, marginBottom:13, flexDirection:'row'}}>
          <Text>{params.data.followers_count} Followers • </Text>
          <Text>{params.data.friends_count} Following • </Text>
          <Text>{params.data.photos_count} Photos</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        {
          params.fotoku.map(foto => (
            <TouchableHighlight key={foto.id} onPress={() => navigate('Detail', {detail: foto})}>
            <Image
              style={{width: deviceWidth/3, height: deviceWidth/3, borderWidth:1, borderColor:'white'}}
              source={{uri: foto.image_url}}/>
            </TouchableHighlight>

           )
          )
        }
        </View>

      </ScrollView>
    )
  }
}

export default About
