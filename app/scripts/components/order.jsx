var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models');

var OrderContainer = React.createClass({
  getInitialState: function(){
    var menuItems = new models.MenuItemCollection();
    var activeOrders = new models.OrderCollection();
    var currentOrder = null;
    return {
      menuItems: menuItems,
      activeOrders: activeOrders,
      currentOrder: currentOrder
    }
  },
  componentWillMount: function(){
    var currentMenuItems = [
      {name: 'Spring rolls', price: 5},
      {name: 'Tom-Ka Gai', price: 5},
      {name: 'Pad Thai', price: 8},
      {name: 'Yellow Curry', price: 9}
    ]
    this.setState({menuItems: currentMenuItems});
  },
  render: function(){
    return (
      <div>
        <CheckOutBanner data={this.state}/>
        Order Page
        <a href="#menu">
          What's in this?
        </a>
      </div>
    )
  }
});

var CheckOutBanner = React.createClass({
  getInitialState: function(){
    var currentOrder = new models.OrderItem;
    var menuItems = this.props.data.menuItems;
    return {
      menuItems: menuItems,
      currentOrder: currentOrder
    }
  },
  render: function(){
    console.log(this.state);
    return(
      <div>
        <MenuList data={this.state}/>
      </div>
    )
  }
});

var MenuList = React.createClass({
  getInitialState:function(){
    console.log(this.props.data);
    var menuItems = this.props.data.menuItems
    return{
      menuItems: menuItems
    }
  },
  componentWillMount: function(){
    var listedItems = this.state.menuItems;
    var refinedList = listedItems.map(function(item, index){
      return (
        <li key={index}>
          <div className="col-xs-7">
            {item.name}
          </div>
          <div className="col-xs-5">
            {item.price}
          </div>
        </li>
      )
    });
    this.setState({menuItems: refinedList});
  },
  render: function(){
    console.log(this.state.menuItems);
    return(
      <ul className="order-items">
        {this.state.menuItems}
      </ul>
    )
  }
});

module.exports = OrderContainer;
