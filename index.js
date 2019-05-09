import React from 'react';
import {
  AppRegistry,
  View,
  NativeModules,
  Environment,
  Text,
  VrButton
} from 'react-360';

const {VideoModule} = NativeModules;

export default class edition_13th extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isPaused: false
    }
    Environment.setBackgroundVideo('myplayer');
    VideoModule.resume('myplayer');
  } 

  handleVideo = () => {
    this.setState({ isPaused: !this.state.isPaused }, () => {
      if (this.state.isPaused) {
        VideoModule.pause('myplayer')
      } else {
        VideoModule.resume('myplayer')
      }
    })
  }

  render() {

    return (
      <View>
        <VrButton onClick={this.handleVideo}>
            <Text>{this.state.isPaused ? 'Play': 'Pause' }</Text>
          </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('edition_13th', () => edition_13th);
