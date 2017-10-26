import React from 'react';
import {Text, View, ScrollView, TouchableHighlight,Image, StatusBar, Linking } from 'react-native';
import Dimensions from 'Dimensions';
import { LoginButton, TappableText } from './src/components';


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

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset'

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


              <View style = {viewStyles.forgottenLoginEncapsulationView}>
              <Text style = {textStyles.forgottenLogin}> Forgotten your login details?</Text>
              <TappableText

              textStyle = {[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
              textTapped={() => Linking.openURL(urls.forgotInstagramLogin)}
              >

              Get Help Signing In Beesh
              </TappableText>

              </View>

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
        marginBottom: 20
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


    },

    forgottenLoginEncapsulationView:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      marginTop: 10,
      marginBottom: window.height * 0.15
    }

};

const textStyles =
{
  forgottenLogin: {
    color:'white',
    fontSize: loginButtonInfo.pageFontSize,
  },

  forgottenLoginBold:{
      fontWeight: 'bold'
  }

};
