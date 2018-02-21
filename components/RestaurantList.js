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
} = React;

const FirebaseUrl = 'https://dazzling-heat-3503.firebaseio.com/';

class RestaurantList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('restaurants');
    this.completedItemsRef = this.getRef().child('complete');
  }

  getRef() {
    return new Firebase(FirebaseUrl);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key()
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Eat Out - Favorites" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>

        <ActionButton onPress={this._addItem.bind(this)} title="Add" />
      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Restaurant Name',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
        {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      // Navigate to a separate restaurant view
      this.props.navigator.push({
        name: 'restaurant',
        restaurant: item,
      });
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

}
module.exports = RestaurantList;
