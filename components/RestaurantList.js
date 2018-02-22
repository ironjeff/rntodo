'use strict';

const RestaurantListBase = require('./RestaurantListBase');
const styles = require('../styles.js')

import React, { Component } from 'react';

const FirebaseUrl = 'https://dazzling-heat-3503.firebaseio.com/';

class RestaurantList extends RestaurantListBase {

  getFireBaseTableName() {
    return 'restaurants';
  }

}
module.exports = RestaurantList;
