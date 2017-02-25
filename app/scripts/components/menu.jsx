var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models');

var MenuContainer = React.createClass({
  getInitialState: function(){
    var menuItems = new models.MenuItemCollection();
    return(
      {menuItems: menuItems}
    )
  },
  render: function(){
    return (
      <div className="container menu">
        <TopBanner />
        Menu Page
        <a href="#order">
          I'm Ready to order
        </a>
        <a href="#admin">
          Employee View
        </a>
      </div>
    )
  }
});

var TopBanner = React.createClass({
  render: function(){
    return(
      <div>
        Banner Here
      </div>
    )
  }
});

module.exports = MenuContainer;
