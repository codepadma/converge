import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Container, Header, Text, Grid, Col, Content, Title, Body, Card, CardItem, Button, List, ListItem, Thumbnail, Left } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';
import SpeakerList from './SpeakerList.js';
import Config from '../../../../config/config.js';
import RegisterStackHeader from './helpers/RegisterStackHeader';

class ConferenceDetails extends Component {

  constructor(props) {
    super(props);
    var colors = ['#ff2d55', '#5856d6', '#007aff', '#5ac8fa', '#ffcc22', '#ff954f', '#ff3b30'];
    this.randomColor = colors[Math.floor(Math.random() * (colors.length -1 + 1))];
  }

  render() {
    return (
      <Container>
        <RegisterStackHeader
           leftOnPress={() => this.props.navigation.navigate('ConferenceList')}
           leftIcon="arrow-back"
           title="Details"
         />
         <Content>
           <Card>
             <CardItem header>
               <Title>{this.props.selectedConference.name}</Title>
             </CardItem>
             <CardItem>
               <Body>
                 <Text>
                   {this.props.selectedConference.details}
                 </Text>
               </Body>
             </CardItem>
             <CardItem footer>
               <Button onPress={() => this.props.navigation.navigate('PaymentForm', {conference: this.props.selectedConference})}>
                 <Text style={{color: 'white'}}>Attend</Text>
               </Button>
             </CardItem>
             <Grid style={{ alignSelf: "center", flex: 0}}>
                <Col style={{ backgroundColor: this.randomColor, height: 5, flex: 1}}></Col>
              </Grid>
          </Card>
          <SpeakerList navigation={this.props.navigation} conferenceID={this.props.selectedConference.id} backPage={'ConferenceDetails'}/>
         </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    selectedConference: state.attendeeReducer
  }
}

export default connect(mapStateToProps)(ConferenceDetails);
