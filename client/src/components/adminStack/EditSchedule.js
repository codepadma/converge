import React, { Component } from 'react';
import { Container, Content, Header, Text, Button, Tabs, Tab, Icon } from 'native-base';

import { connect } from 'react-redux';

import EditConferenceFooter from './helpers/EditConferenceFooter';
import EditScheduleForm from './EditScheduleForm';



class EditSchedule extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Schedule',
      headerRight: <Button transparent onPress={() => navigation.navigate('EditScheduleForm')}><Icon name="add"/></Button>
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      dates: ['July 1, 2017', 'July 2, 2017', 'July 3, 2017'],
      confID: null
    };
  }

  componentDidMount() {
    // console.log('component mounted', this);
    // if (this.state.confID === null) {
    //   this.setState({
    //     confID: this.props.navigation.state.params.confID
    //   }, function() {console.log('confid is now ', this.state.confID)})
    // }
  }

  fetchData() {
    // will make calls to the database to get the data
  }

  render() {
    // console.log('in EditSchedule');
    console.log('editschedule props', this.props);
    return (
      <Container>
        <Tabs initialPage={0}>
          {
            this.state.dates.map((date, i) => {
              return (
                <Tab key={i} heading={date}>
                  <Content>
                    <Text>Schedule associated with {date}</Text>
                  </Content>
                </Tab>
              )
            })
          }
        </Tabs>
        <EditConferenceFooter navigation={this.props.navigation} />

      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.adminReducer,
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(EditSchedule);