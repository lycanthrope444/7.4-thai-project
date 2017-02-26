var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanmenu'
});

//This may not be necessary?
var OrderItem = Backbone.Model.extend({
  // idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: OrderItem,
});

var ActiveOrder = Backbone.Collection.extend({
  idAttribute: '_id'
});

var ActiveOrderCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/nathanorders'
});
// var CurrentOrderItem = Backbone.Collection.extend({
//   id: '_id'
// });
//
// var CurrentOrderColl = Backbone.Collection.extend({
//   model: CurrentOrderItem
// });

module.exports ={
  MenuItem : MenuItem,
  MenuItemCollection: MenuItemCollection,
  OrderItem: OrderItem,
  OrderCollection: OrderCollection,
  ActiveOrder: ActiveOrder,
  ActiveOrderCollection: ActiveOrderCollection
  // CurrentOrderItem: CurrentOrderItem,
  // CurrentOrderColl: CurrentOrderColl
};
