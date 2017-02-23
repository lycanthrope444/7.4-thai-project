var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({

});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem
});

//This may not be necessary?
var OrderItem = Backbone.Model.extend({

});

var OrderCollection = Backbone.Collection.extend({
  model: OrderItem
});

module.exports ={
  MenuItem : MenuItem,
  MenuItemCollection: MenuItemCollection,
  OrderItem: OrderItem,
  OrderCollection: OrderCollection
};
