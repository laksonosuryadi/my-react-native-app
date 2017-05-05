import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  RefreshControl,
  TouchableHighlight
} from 'react-native';

import { Col, Grid, Spinner, Footer, FooterTab, Button, Icon } from 'native-base';

import PhotoItem from './PhotoItem'
import { fetchPhoto, fetchMyData } from '../actions'

class ListPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
    };
  }

  static navigationOptions = { title : '700px'}

  componentDidMount() {
    this.props.fetchPhoto()
    this.props.fetchMyData()
  }

  afterRefresh() {
    this.setState({refreshing: false})
    this.props.fetchPhoto()
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.afterRefresh()
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          refreshControl={
           <RefreshControl
             refreshing={this.state.refreshing}
             onRefresh={this._onRefresh.bind(this)}
           />
        }>
          { this.props.photos.length !== 0 &&
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:25, marginTop:10, marginBottom:10}}>20 Popular Photos</Text>
            </View>
          }

          { this.props.photos.length === 0 && <Spinner color='grey' style={{marginTop:200}}/>}

          <View style={styles.grid}>
              {
                this.props.photos.map(photo => (
                  <PhotoItem key={photo.id} photo={photo} navigation={this.props.navigation} />
                  )
                )
              }
          </View>

          { this.props.photos.length !== 0 &&
            <Footer>
              <FooterTab>
                <Button onPress={() => navigate('ListPhoto')}>
                  <Icon name="home" />
                </Button>
                <Button>
                  <Icon name="camera" />
                </Button>
                <Button onPress={() => navigate('About', {data: this.props.user})}>
                  <Icon name="person" />
                </Button>
              </FooterTab>
            </Footer>
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  grid: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  loading: {
    marginTop: 100,
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  stats: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
}

const mapStateToProps = (state) => ({
  photos: state.data.photos,
  user: state.data.user
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: () => dispatch(fetchPhoto()),
  fetchMyData: () => dispatch(fetchMyData())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPhoto);
