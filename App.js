import React from 'react';
import {Text, View } from 'react-native';

export default class App extends React.Component
 {
    constructor(props)
    {
      super(props);
   }

  render() {

    return (
      <View style={viewStyles.container}>
          <Text>Testing . . . Testing . . . Mic Check 1 2 1 2</Text>
      </View>
    );
  }
}

const viewStyles =
  {

  container:
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }

};
