var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models');

var MenuContainer = React.createClass({
  render: function(){
    return (
      <div>
        <TopBanner />
        Menu Page
        <a href="#order">
          I'm Ready to order
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
