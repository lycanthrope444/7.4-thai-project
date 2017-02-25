var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models');

var OrderContainer = React.createClass({
  getInitialState: function(){
    var menuItems = new models.MenuItemCollection();
    var activeOrders = new models.OrderCollection();
    var currentOrder = new models.OrderCollection();
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
  addItem: function(item, qty){
    
    var orderManager = ({item: item, qty:qty});
    // var holding = this.state.currentOrder;
    // holding.push(orderManager);
    this.state.currentOrder.add({name: item.name, number: qty});
    console.log(this.state.currentOrder);
  },
  render: function(){
    return (
      <div>
        <CheckOutBanner data={this.state} addItem={this.addItem}/>
        Order Page
        <a href="#menu">
          What's in this?
        </a>
      </div>
    )
  }
});

/**********************************
*
***********************************/


var CheckOutBanner = React.createClass({
  getInitialState: function(){
    var currentOrder = this.props.data.currentOrder;
    var menuItems = this.props.data.menuItems;
    return {
      menuItems: menuItems,
      currentOrder: currentOrder,
      addedItem: ''
    }
  },
  componentWillMount:function(){

  },
  addItem: function(item, qty){
    this.setState({addedItem: item.name, qty:qty});

    this.props.addItem(item, qty);
    // console.log(this.state.currentOrder);
  },
  render: function(){
    // console.log(this);
    var self = this;
    // console.log(this.state.currentOrder);
    var itemOrdered = this.state.addedItem;

    // console.log(this.props.data.currentOrder);
    var qty = this.state.qty;
    return(
      <div>
        <div className="order-bar">
          <h2>Order Info:</h2>
          <div className="">
            Items Ordered:
            <span>{qty}{itemOrdered}</span>
          </div>
          <div>
            Total:
          </div>
          <div>
            Estimated Wait:
          </div>
          <div>

          </div>
        </div>
        <MenuList data={this.state} addItem={this.addItem}/>
      </div>
    )
  }
});

/**********************************
*
***********************************/


var MenuList = React.createClass({
  // propTypes: {
  //   addItem: React.PropTypes.func.isRequired
  // },
  getInitialState:function(){
    var menuItems = this.props.data.menuItems;
    return{
      menuItems: menuItems
    }
  },
  componentWillMount: function(){
  },
  handleChange: function(event){
    // console.log(this);
    // this.setState({itemQty:event.target.value})
  },
  addItem: function(item, qty){
    this.props.addItem(item, qty);
  },
  render: function(){
    return(
      <ul className="order-items">
        <MenuListItem data={this.state} addItem={this.addItem} />
      </ul>
    )
  }
});

/**********************************
*
***********************************/

var MenuListItem = React.createClass({
  getInitialState: function(){
    // console.log('init', this);
    var menuItems = this.props.data.menuItems;
    return {menuItems: menuItems}
  },
  handleChange:function(event){

    // console.log(this.state);
    this.setState({qty:event.target.value});
  },
  addItem: function(item){
    // console.log('menu list item',this.state);

    this.props.addItem(item, this.state.qty);
  },
  render: function(){
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
              <input className="form-control"
                placeholder="Qty"
                value={self.qty}
                onChange= {self.handleChange}
              />
              <span className="input-group-btn">
                <button className="order-btn btn"
                  onClick={function(e){
                    e.preventDefault();
                    self.addItem(item);
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
    var self = this;
    return (
      <div>
      {refinedList}
      </div>
    )
  }
});

module.exports = OrderContainer;
