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
  addItem: function(){
    console.log('Container Click');
    return null;
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
    var currentOrder = null;
    var menuItems = this.props.data.menuItems;
    return {
      menuItems: menuItems,
      currentOrder: currentOrder
    }
  },
  componentWillMount:function(){

  },
  addItem: function(){
    console.log('banner clicked');
    return null;
  },
  render: function(){
    console.log(this);
    var self = this;
    return(
      <div>
        <div className="order-bar">
          <h2>Order Info:</h2>
          <div className="">
            Items Ordered:
          </div>
          <div>
            Total:
          </div>
          <div>
            Estimated Wait:
          </div>
        </div>
        <MenuList data={this.state} AddItem={self.AddItem}/>
      </div>
    )
  }
});

var MenuList = React.createClass({
  // propTypes: {
  //   addItem: React.PropTypes.func.isRequired
  // },
  getInitialState:function(){
    var menuItems = this.props.data.menuItems;
    var currentOrder = new models.OrderItem;
    return{
      menuItems: menuItems
    }
  },
  addItem: function(){
    console.log('menu clicked', this.props);
    this.props.addItem();
  },
  componentWillMount: function(){
  },
  render: function(){
    //Rendering menu List
    console.log();
    var self = this;
    var listedItems = this.state.menuItems;
    var refinedList = listedItems.map(function(item, index){
      return (
        <li key={index}>
          <div className="col-xs-4">
            {item.name}
          </div>
          <div className="col-xs-4">
            {item.price}
          </div>
          <div className="col-xs-4">
            <div className="input-group">
              <input className="form-control" placeholder="Qty" />
              <span className="input-group-btn">
                <button className="btn"
                  onClick={function(e){
                    e.preventDefault();
                    self.addItem();
                  }}
                >
                  Order This
                </button>
              </span>
            </div>
          </div>
        </li>
      )
    });

    return(
      <ul className="order-items">
        {refinedList}
      </ul>
    )
  }
});

module.exports = OrderContainer;
