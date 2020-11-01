import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPallete from './screens/ColorPallete';
// styles done by inline styles
// to create styles we use Stylesheet
// styles are unitless

// to display array of data u use Flatlist or sectionlist
// do not use map in react-native

// FOR NAVIGATION INSTALL REACT NAVIGATION
// STEPS
// npm install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

// colors

const Stack = createStackNavigator();

const App = () => {
  return (
    // Wrap all app with navigation container
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPallete}
          // changes title of the stack header to the ones available in route params
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
