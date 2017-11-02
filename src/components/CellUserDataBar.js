import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import Dimensions from 'Dimensions';

class CellUserDataBar extends Component
{
  constructor (props)
  {
    super(props);
  }

  render()
  {
    return(
      <View style= {viewStyles.container}>
        <Image source= {{uri: this.props.imageURL}} style={viewStyles.profilePicture} resizeMode = {'cover'}/>
        <Text style = {textStyles.username}>{this.props.username}</Text>
        <Image
          source= {require('../images/icons/threeDots.png')}
          style = {viewStyles.dotDotDot}
          resizeMode = {'contain'}
        />
      </View>
    );
  }
}

const viewStyles = {
  container:
  {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderColor: 'lightgrey',
    shadowOffset: {height: 0.2, width: 0},
    shadowOpacity: 0.2,
    borderTopWidth: 0.5
  },

  profilePicture:
  {
  height: 31.5,
  width: 31.5,
  borderRadius:15,
  marginRight: 10,
  marginLeft: 3
},

dotDotDot:
{
  height: 15,
  width: 15,
  marginLeft: '58%'
}

};

const textStyles =
{
  username:
  {
    fontWeight: '500',
    backgroundColor: 'transparent',
    fontSize: 13
  },

  dotDotDot:
  {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
    marginLeft: '50%',
  }
};
export {CellUserDataBar};
