var React = require('react');

var IntroContainer = React.createClass({
  render: function(){
    return (
      <div className= "container">
        <BannerView />
        <MenuView />
        <OrderView />
      </div>
    )
  }
});

var BannerView = React.createClass({
  render: function(){
    return (
      <div className="banner">
        <h1>Majestic Thai</h1>
      </div>
    )
  }
});

var MenuView = React.createClass({
  render: function (){
    return (
      <a href="#menu">
        <div className="menu-left">
          Check out our menu
        </div>
      </a>
    )
  }
});

var OrderView = React.createClass({
  render:function (){
    return (
      <a href="#order">
        <div className="order-right">
          Place your order
        </div>
      </a>
    )
  }
});

module.exports = IntroContainer;
