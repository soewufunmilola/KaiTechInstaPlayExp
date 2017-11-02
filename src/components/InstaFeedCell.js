import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import {CellUserDataBar, CellBottomBar} from './';
import Dimensions from 'Dimensions';

const window = Dimensions.get('window');



class InstaFeedCell extends Component{
  constructor (props)
  {
    super(props);
    this.cellData = props.cellData;
    //not every instance of cellData will have a user object in it.

    console.log(props.cellData.likes);


  }

  render()
  {

    return(
      <View>
        <CellUserDataBar username = {this.props.cellData.user.username} imageURL = {this.props.cellData.user.profile_picture}/>
        <Image source= {{uri: this.props.cellData.images.standard_resolution.url}} style={viewStyles.imagesPostedByUser} resizeMode = {'cover'}/>
        <CellBottomBar/>
        <Text> Liked By {this.props.cellData.likes.count}</Text>
        <View style = {{flexDirection: 'row'}}>
            <Text style = {{fontWeight: 'bold'}}> {this.props.cellData.user.username}  </Text>
            <Text>{this.props.cellData.caption.text}</Text>
        </View>
        <View style= {{margin : 40}}></View>
      </View>
    );
  }
}

viewStyles =
{
  imagesPostedByUser:
  {
      height: window.width,
      width: window.width
  }
};

export { InstaFeedCell };
