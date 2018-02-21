'use strict';

const React = require('react-native');
const RecipeList = require('./components/RecipeList');
const Restaurant = require('./components/Restaurant');
const RestaurantList = require('./components/RestaurantList');
const RestaurantListTODO = require('./components/RestaurantListTODO');
const TODOList = require('./components/TODOList');
const MealTypeSelector = require('./components/MealTypeSelector');
const MapTest = require('./components/MapTest');
const styles = require('./styles.js');

const {
  AppRegistry,
  Navigator,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  StatusBar,
} = React;

//var _navigator; // we fill this up upon on first navigation.

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      <MealTypeSelector navigator={navigationOperations} />
    );
  } else if (route.name === 'restaurant') {
    return (
      <Restaurant
        // Pass movie object passed with route down as a prop
        restaurant={route.restaurant}
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
      <Navigator
        // Default to list route
        initialRoute={{name: 'list'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    )
  }

  // render() {
  //   return (
  //     <TabBarIOS selectedTab={this.state.selectedTab}>
  //       <TabBarIOS.Item
  //         selected={this.state.selectedTab === 'eat_in'}
  //         icon={{uri: groceries64Icon, scale: 20}}
  //         onPress={() => {
  //             this.setState({
  //                 selectedTab: 'eat_in',
  //             });
  //         }}>
  //         <RecipeList />
  //       </TabBarIOS.Item>
  //       <TabBarIOS.Item
  //         selected={this.state.selectedTab === 'eat_out_fav'}
  //         icon={{uri: pizza64Icon, scale: 20}}
  //         onPress={() => {
  //             this.setState({
  //                 selectedTab: 'eat_out_fav',
  //             });
  //         }}>
  //         <RestaurantList />
  //       </TabBarIOS.Item>
  //       <TabBarIOS.Item
  //         selected={this.state.selectedTab === 'eat_out_new'}
  //         icon={{uri: want64Icon, scale: 20}}
  //         onPress={() => {
  //             this.setState({
  //                 selectedTab: 'eat_out_new',
  //             });
  //         }}>
  //         <RestaurantListTODO />
  //       </TabBarIOS.Item>
  //     </TabBarIOS>
  //   )
  // }
}

/**
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'todo'}
          icon={{uri: base64Icon, scale: 3}}
          onPress={() => {
              this.setState({
                  selectedTab: 'todo',
              });
          }}>
          <TODOList />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'map'}
          icon={{uri: base64Icon, scale: 3}}
          onPress={() => {
              this.setState({
                  selectedTab: 'map',
              });
          }}>
          <MapTest />
        </TabBarIOS.Item>
*/


AppRegistry.registerComponent('rntodo', () => rntodo);
