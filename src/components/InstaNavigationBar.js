import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { Constants } from 'expo';
import Dimensions from 'Dimensions';


const navBarHeigth = 60;
const iconSize = navBarHeigth/2;
const window = Dimensions.get('window');


class InstaNavigationBar extends Component{
  constructor (props){
    super(props);
  }
  render(){
    return(
      <View style={viewStyles.container}>
          <Image
            resizeMode = {'cover'}
            source={require('../images/icons/camera.png')}
            style = {viewStyles.genericIcon}
          />
          <Image
            resizeMode = {'cover'}
            source={require('../images/icons/instagram-logo-black.png')}
            style = {viewStyles.instagramHeaderLogo}
          />
          <Image
          resizeMode = {'cover'}
          source={require('../images/icons/paper-plane.png')}
          style = {[viewStyles.genericIcon , viewStyles.paperPlane]}
          />
      </View>
    );
  }
}

const viewStyles =
{
  container:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width,
    height: navBarHeigth,
    borderBottomWidth: 1,
    borderColor: 'rgb(220, 220, 220)',
    backgroundColor: 'white',
    marginTop: 20
  },

  paperPlane:
  {
    width: iconSize * 1.10,
    height: iconSize * 1.10,
  },

  genericIcon:
  {
      width: iconSize,
      height: iconSize,
      marginHorizontal: 5,
      backgroundColor: 'transparent'
  },

  instagramHeaderLogo:
  {
    width: 120,
    height: 45,
  }
}


export {InstaNavigationBar};
