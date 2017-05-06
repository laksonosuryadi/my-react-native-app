'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';

import Camera from 'react-native-camera';

class CameraFeature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          captureTarget={Camera.constants.CaptureTarget.cameraRoll}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}></Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then(Alert.alert('Captured!', 'Photo has been added to your Gallery!'))
      .catch(err => console.error(err));
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'maroon',
    color: '#000',
    padding: 35,
    margin: 40
  }
};

export default CameraFeature;
