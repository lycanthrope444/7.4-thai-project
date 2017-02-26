var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
  id: '_id'
});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanmenu'
});

//This may not be necessary?
var OrderItem = Backbone.Model.extend({
  id: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: OrderItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanorders'
});

var CurrentOrderItem = Backbone.Collection.extend({
  id: '_id'
});

var CurrentOrderColl = Backbone.Collection.extend({
  model: CurrentOrderItem
});

module.exports ={
  MenuItem : MenuItem,
  MenuItemCollection: MenuItemCollection,
  OrderItem: OrderItem,
  OrderCollection: OrderCollection,
  CurrentOrderItem: CurrentOrderItem,
  CurrentOrderColl: CurrentOrderColl
};
