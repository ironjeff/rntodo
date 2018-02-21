'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  StatusBar,
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

const RecipeList = require('./components/RecipeList');
const Restaurant = require('./components/Restaurant');
const Recipe = require('./components/Recipe');
const RestaurantList = require('./components/RestaurantList');
const RestaurantListTODO = require('./components/RestaurantListTODO');
const TODOList = require('./components/TODOList');
const MealTypeSelector = require('./components/MealTypeSelector');
const MapTest = require('./components/MapTest');
const styles = require('./styles.js');

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      <MealTypeSelector navigator={navigationOperations} />
    );
  } else if (route.name === 'restaurant') {
    return (
      <Restaurant
        restaurant={route.restaurant}
        // Pass navigationOperations as navigator prop
        navigator={navigationOperations}
      />
    );
  } else if (route.name === 'recipe') {
    return (
      <Recipe
        recipe={route.recipe}
        // Pass navigationOperations as navigator prop
        navigator={navigationOperations}
      />
    );
  }
};

// Main class that returns the navigator
class rntodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'eat_in'
    };
  }

  render() {
    return (
      <NavigationExperimental.Navigator
        // Default to list route
        initialRoute={{name: 'list'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    )
  }
}


AppRegistry.registerComponent('rntodo', () => rntodo);
