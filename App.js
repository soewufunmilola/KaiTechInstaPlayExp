import React from 'react';
import {Text, View, ScrollView, TouchableHighlight,Image, StatusBar } from 'react-native';
import Dimensions from 'Dimensions';
import { LoginButton } from './src/components';


//this code creates a constant that holds the Dimensions of the current device as an object
const window = Dimensions.get('window');
const textInputPlaceholder = 'rgba(230, 230, 230, 0.8)';
const standardComponentWidth = window.width * 0.82;
const colors = {
    facebook: 'rgb(59, 89, 152)',
    text: 'rgba(255, 255, 255, 0.75 )',
    instagramButtonBorderColor: 'rgba(255, 255, 255, 0.35)',
    facebookButtonBorderColor: 'rgba(255, 255, 255, 0.35)'

}

const loginButtonInfo = {

height: 45,
pageFontSize: 11,
borderWidth: 0.8
}

export default class App extends React.Component
{

  loginButtonTapped = () => {
    console.log('the button was just tapped');
  }
  render() {

    return (
        <Image source = {require('./src/images/Superman.jpg')} style = {viewStyles.container}>
            <StatusBar backgroundColor="transparent" barStyle= "dark-content"/>
            <ScrollView>
              <Image source = {require ('./src/images/instaplaylogo2.png')}
              resizeMode = {'contain'}
              style ={viewStyles.instagramTextLogo}
            />

              <LoginButton
              buttonViewStyle = {viewStyles.instagramLoginButtonView}
              touchableHighlightStyle = {viewStyles.instagramLoginButtonHighlightStyle}
              buttonTextStyle = {{ color: colors.text}}
              buttonTapped = {this.loginButtonTapped}
              activeOpacity = {0.75}

              >
              Log In (Via Instagram)
              </LoginButton>

              <LoginButton
              buttonViewStyle = {[viewStyles.instagramLoginButtonView , viewStyles.facebookLoginButtonView]}
              touchableHighlightStyle = {viewStyles.facebookloginButtonHighlightStyle}
              buttonTextStyle = {{ color: colors.text}}
              buttonTapped = {this.loginButtonTapped}
              activeOpacity = {0.75}

              >
              Facebook Login
              </LoginButton>

            </ScrollView>
       </Image>
    );
  }


}


const viewStyles = {

  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: null,
      height: null
    },


    instagramTextLogo:
    {
      width: 400,
      height:200,
      marginTop: 10,
      marginBottom: 30,
      alignSelf: 'center'
    },


    instagramLoginButtonView:
    {
        backgroundColor: 'transparent',
        borderColor: colors.instagramButtonBorderColor,
        borderWidth: 0.8,
        borderRadius: 5,
        width: standardComponentWidth,
        height: loginButtonInfo.height,
        justifyContent: 'center',
        alignItems: 'center',
    },

    facebookLoginButtonView:
    {
      backgroundColor: colors.facebook
    },

    instagramLoginButtonHighlightStyle:
    {
      backgroundColor: 'transparent',
      width: standardComponentWidth,
      height: loginButtonInfo.height,
      marginTop: 5

    },

    facebookloginButtonHighlightStyle:
    {
        backgroundColor: colors.facebook,
        width: standardComponentWidth,
        height: loginButtonInfo.height,
        marginTop: 30,
        marginBottom: 10,
        borderWidth: loginButtonInfo.borderWidth,
        borderRadius: loginButtonInfo.borderRadius,
        borderColor: colors.facebookButtonBorderColor


    }



};
