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
	
	render() {
		return (
	      	<View>
		      	<ListItem item={this.props.recipe} />
	        	<View style={styles.buttonContainer}>
	            	<Button 
	            		styleName="dark"
		              	onPress={() => {this.props.navigator.pop();}}
		            >
	            		<Text>CLOSE</Text>
	            	</Button>
	            </View>
	         </View>
		)
	}
}
module.exports = Recipe;
