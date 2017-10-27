import React from 'react';
import {Text, View, ScrollView, TouchableHighlight,Image, StatusBar, Linking, WebView } from 'react-native';
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
    forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
    twitterLoginUrl: 'https://www.twitter.com/login?lang=en',
    instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
    instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=40b40b412b424d44b0bc02d1229a90a7&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
    instagramLogout: 'https://instagram.com/accounts/logout',
    instagramBase: 'https://www.instagram.com/'

}

export default class App extends React.Component
{

    constructor(props)
    {
          super(props);
          this.state =
          {
              authenticationURL: urls.instagramLogout,
              retrievedAccessToken: '',
              isUserLoggedIn: false,
              displayAuthenticationWebView: false

          }

    }


    loginButtonTapped = () => {
        this.setState({displayAuthenticationWebView: true});
    }

    onURLStateChange = (webViewState) => {
      let accessTokenSubString = 'access_token=';

      console.log("yo joe" + webViewState.url)

      if (webViewState.url == urls.instagramBase)
      {
          this.setState({authenticationURL: urls.instagramAuthLogin});
      }


    }


    orSeperatorComponent = () => {
        return(
                <View style= {viewStyles.orSeperatorComponent}>
                    <View style = {viewStyles.orSeperatorline}/>
                    <Text style= {textStyles.orSeperatorText}> OR</Text>
                    <View style = {viewStyles.orSeperatorline}/>
                </View>
        );


    }

    signUpFooter = () => {
        return(
                <View style = {[viewStyles.forgottenLoginEncapsulationView,viewStyles.signUpFooter]}>
                <Text style = {textStyles.forgottenLogin}> This lame nigga aint got an account??   </Text>
                <TappableText
                  textStyle = {[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
                  textTapped = {() => Linking.openURL(urls.instagramSignUp)}
                >
                      Kneel Up!
                </TappableText>
                </View>
        )

    }

    loginWithTwitterTappableTextComponent = () =>{
        return(
                 <View style = {viewStyles.twitterLoginComponentEncapsulatingView}>
                    <Image
                      source= {require('./src/images/twitter_bird.png')}
                      style = {viewStyles.twitterIcon}
                      resizeMode = {'contain'}
                    />

                  <TappableText
                    textStyle = {textStyles.twitterLoginText}
                    textTapped = {() => Linking.openURL(urls.twitterLoginUrl)}
                  >
                         Log In With Twitter
                  </TappableText>
                </View>
        );

    }

    authenticationWebViewComponent = () =>{
        return(
           <WebView
              source = {{uri: this.state.authenticationURL}}
              startInLoadingState = {true}
              onNavigationStateChange = {this.onURLStateChange}
           />
        );
    }

    loginScreenComponent = () =>{
        return (
          <Image source = {require('./src/images/Superman.jpg')} style = {viewStyles.container}>
              <StatusBar backgroundColor="transparent" barStyle= "dark-content"/>
              <ScrollView style={viewStyles.scrollView}>
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
                <Text style = {textStyles.forgottenLogin}> Forgotten your login details? </Text>
                <TappableText

                textStyle = {[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
                textTapped={() => Linking.openURL(urls.forgotInstagramLogin)}
                >

                Get Help Signing In Beesh
                </TappableText>

                </View>
                {this.orSeperatorComponent()}
                {this.loginWithTwitterTappableTextComponent()}
              </ScrollView>
              {this.signUpFooter()}
         </Image>
        );
    }

    render() {

          if(this.state.displayAuthenticationWebView == false)
          {
              return (
                  this.loginScreenComponent()
              );
          }
          else {
            return(
              this.authenticationWebViewComponent()
            );
          }
  }


}


const viewStyles = {

   container:
   {
      flex: 10,
      alignItems: 'center',
      width: null,
      height: null
    },

    scrollView: {
      flex: 8
    },

    instagramTextLogo:
    {
      width: 400,
      height:200,
      marginTop: 24,
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

    forgottenLoginEncapsulationView:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      marginTop: 10,
      marginBottom: 10
    },

    orSeperatorComponent:
    {
      flexDirection: 'row',
      width: standardComponentWidth,
      paddingHorizontal: 10,
      paddingVertical: 2,
      marginVertical: 10,
      alignItems: 'center',
      alignSelf: 'center'

    },

    orSeperatorline:
    {
      height: 1,
      flex: 5,
      backgroundColor: colors.facebookButtonBorderColor,
      borderColor: colors.facebookButtonBorderColor,
      borderWidth: 0.5,
    },

    twitterLoginComponentEncapsulatingView:
    {
      flexDirection: 'row',
      paddingHorizontal: 10,
      width: standardComponentWidth,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 11,
      alignSelf: 'center'
    },

    twitterIcon:
    {

      width: 20,
      height: 20
    },

    signUpFooter:
    {
      flex: 0.092,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.15)',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 1},
      top: 10,
      elevation: 2,
      height: null,
      width: '100%'

    }


};

const textStyles =
{
    forgottenLogin:
    {
        color:'white',
        fontSize: loginButtonInfo.pageFontSize,
    },

    forgottenLoginBold:
    {
        fontWeight: 'bold'
    },

    orSeperatorText:
    {
        fontWeight: 'bold',
        fontSize: 12.5,
        marginHorizontal: 3,
        flex: 0.7,
        color: 'white'
    },

    twitterLoginText:
    {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 13,
        color: 'white',
        backgroundColor: 'transparent'
    }



};
