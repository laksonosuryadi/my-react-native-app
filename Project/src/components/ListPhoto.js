import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  RefreshControl,
  TouchableHighlight,
  StatusBar,
  CameraRoll,
  Dimensions,
  Modal
} from 'react-native';

import { Col, Grid, Spinner, Footer, FooterTab, Button, Icon, Container } from 'native-base';

import PhotoItem from './PhotoItem'
import { fetchPhoto, fetchMyData, fetchMyPhoto } from '../actions'

const width = Dimensions.get('window').width

class ListPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      modalVisible: false,
      photos: []
    };
  }

  static navigationOptions = { title : '700px'}

  componentDidMount() {
    this.props.fetchPhoto()
    this.props.fetchMyData()
    this.props.fetchMyPhoto()
  }

  afterRefresh() {
    this.setState({refreshing: false})
    this.props.fetchPhoto()
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.afterRefresh()
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }


  render () {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <View style={styles.container}>
          <ScrollView
            style={styles.content}
            refreshControl={
             <RefreshControl
               refreshing={this.state.refreshing}
               onRefresh={this._onRefresh.bind(this)}
             />
          }>
            <StatusBar
              backgroundColor='maroon'
              barStyle='light-content'
            />

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
          </ScrollView>

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => console.log('closed')}
          >
          <View style={styles.modalContainer}>
            <Button iconLeft light
              onPress={this.toggleModal}
              style={{marginBottom:15}}
            >
              <Icon name='arrow-back' /><Text>Back</Text>
            </Button>
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      key={i}
                      underlayColor='transparent'

                    >
                      <Image
                        style={{
                          width: width/3,
                          height: width/3
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
          </View>
        </Modal>

            { this.props.photos.length !== 0 &&
              <Footer>
                <FooterTab style={{backgroundColor:'maroon'}}>
                  <Button onPress={() => navigate('ListPhoto')}>
                    <Icon name="home" style={{color:'white'}}/>
                  </Button>
                  <Button onPress={() => navigate('Camera')}>
                    <Icon name="camera" style={{color:'white'}}/>
                  </Button>
                  <Button onPress={() => { this.toggleModal(); this.getPhotos() }}>
                    <Icon name="md-add" style={{color:'white'}}/>
                  </Button>
                  <Button onPress={() => navigate('About', {data: this.props.user, fotoku: this.props.myPhotos})}>
                    <Icon name="person" style={{color:'white'}}/>
                  </Button>
                </FooterTab>
              </Footer>
            }

        </View>
      </Container>
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
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
}

const mapStateToProps = (state) => ({
  photos: state.data.photos,
  user: state.data.user,
  myPhotos: state.data.myPhotos
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: () => dispatch(fetchPhoto()),
  fetchMyData: () => dispatch(fetchMyData()),
  fetchMyPhoto: () => dispatch(fetchMyPhoto())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPhoto);
