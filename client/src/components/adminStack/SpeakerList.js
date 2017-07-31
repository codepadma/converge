import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, List, Text, Card} from 'native-base';
import SpeakerListEntry from './SpeakerListEntry';



export default class AddSpeakersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
          {
            this.props.speakers.map((speaker, key) => {
              return (
                <SpeakerListEntry
                  key={key}
                  speaker={speaker}
                  navigation={this.props.navigation}
                  />
              );
            })
          }
      </Content>
    );
  }
}