import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPallete from './screens/ColorPallete';
import ColorPaletteModal from './screens/ColorPaletteModal';
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

// rename to root stack --- to add modal
// const Stack = createStackNavigator();

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPallete}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    // Wrap all app with navigation container
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
