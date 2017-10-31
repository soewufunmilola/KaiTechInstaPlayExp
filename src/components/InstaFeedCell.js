import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import {CellUserDataBar} from './';


class InstaFeedCell extends Component{
  constructor (props)
  {
    super(props);
    this.cellData = props.cellData;
    //not every instance of cellData will have a user object in it.

    console.log(props.cellData.user);


  }

  render()
  {

    return(
      <View>
        <CellUserDataBar username = {this.props.cellData.user.username} imageURL = {this.props.cellData.user.profile_picture}/>
      </View>
    );
  }
}

export { InstaFeedCell };
