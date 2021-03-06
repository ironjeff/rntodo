'use strict';

const Firebase = require('firebase');
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('../styles.js')

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TouchableOpacity,
} from 'react-native';

import { 
	Button,
} from '@shoutem/ui';


class Recipe extends React.Component {
  static navigationOptions = {
    title: 'Recipe Info',
  };

	render() {
	    const { params } = this.props.navigation.state;
	    const itemName = params ? params.recipe : null;

		return (
	      	<View>
		      	<ListItem item={itemName} />
	        	<View style={styles.buttonContainer}>
	            	<Button 
	            		styleName="dark"
		              	onPress={() => {this.props.navigation.goBack();}}
		            >
	            		<Text>CLOSE</Text>
	            	</Button>
	            </View>
	         </View>
		)
	}
}
module.exports = Recipe;
