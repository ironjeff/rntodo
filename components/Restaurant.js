'use strict';

const React = require('react-native');
const Firebase = require('firebase');
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('../styles.js')

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TouchableOpacity,   // Handles button presses

} = React;

class Restaurant extends React.Component {
	
	render() {
		return (
	      	<View>
		      	<ListItem item={this.props.restaurant} />
	        	<View style={styles.buttonContainer}>
	            {/* Press handler */}
	            <TouchableOpacity
	              // Go to the previous screen
	              onPress={() => {this.props.navigator.pop();}}
	              // Dim button a little bit when pressed
	              activeOpacity={0.7}
	              // Pass button style
	              style={styles.button}
	            >
	              <Text style={styles.buttonText}>CLOSE</Text>
	            </TouchableOpacity>
	          	</View>
	         </View>
		)
	}
}
module.exports = Restaurant;
