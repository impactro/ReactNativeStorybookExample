/**
 * Sample React Native App Exemple of StoryBook
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import StorybookUIRoot from './storybook';
// export { StorybookUIRoot as default };

import React from 'react';
import { SafeAreaView, Button, Text, View } from 'react-native';

export const App = () => {

  return <SafeAreaView>
    <View>
      <Button><Text>Botão</Text></Button>
    </View>
  </SafeAreaView>
};

export default App;
