import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import Dimensions from 'Dimensions';

class CellBottomBar extends  Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <View style = {viewStyles.container}>
          <Image
            source= {require('../images/icons/like-filled.png')}
            style = {viewStyles.heartCommentAndPaperPlaneButton}
            resizeMode = {'contain'}
          />
          <Image
            source= {require('../images/icons/chat.png')}
            style = {viewStyles.heartCommentAndPaperPlaneButton}
            resizeMode = {'contain'}
          />
          <Image
            source= {require('../images/icons/paper-plane.png')}
            style = {viewStyles.heartCommentAndPaperPlaneButton}
            resizeMode = {'contain'}
          />
          <Image
            source= {require('../images/icons/bookmark-white.png')}
            style = {[viewStyles.heartCommentAndPaperPlaneButton, viewStyles.bookmark]}
            resizeMode = {'contain'}
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
    alignItems: 'center',
  },

  heartCommentAndPaperPlaneButton:
  {
    width: 25,
    height: 25,
    margin: 8
  },

  bookmark:
  {
    marginLeft: '50%'
  }


};

export { CellBottomBar };
