/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Modal} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={{flex: 1}}>
            <Text>Content modal</Text>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default App;
