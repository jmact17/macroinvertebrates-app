import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home.js';
import OrdersScreen from './screens/OrdersMenu/OrdersMenu.js';
import DiagCharsScreen from './screens/DiagCharsOrder/DiagCharsOrder.js';
import GlossaryScreen from './screens/Glossary.js';
import AboutScreen from './screens/About.js';
import EphemeropteraScreen from './screens/Order/Ephemeroptera.js';
import BaetidaeScreen from './screens/Family/Baetidae.js';

/* createStackNavigator(RouteConfigs, StackNavigatorConfig); */
export const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Orders: { screen: OrdersScreen },
    DiagnosticCharacters: { screen: DiagCharsScreen},
    Glossary: { screen: GlossaryScreen },
    About: { screen: AboutScreen },
    Ephemeroptera: { screen: EphemeropteraScreen },
    Baetidae: { screen: BaetidaeScreen },
  },
  {
    initialRouteName: 'Home', /* default screen of stack */
    /* header config for all screens */
    headerMode: 'float',
    navigationOptions: { /* default navigation options for screen */
      headerStyle: {
        backgroundColor: '#C0CCDA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);