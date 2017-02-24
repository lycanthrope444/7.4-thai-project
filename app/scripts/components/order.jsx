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
      {name: 'Spring rolls', price: 5, qty: 1},
      {name: 'Tom-Ka Gai', price: 5, qty: 1},
      {name: 'Pad Thai', price: 8, qty: 1},
      {name: 'Yellow Curry', price: 9, qty: 1}
    ]
    this.setState({menuItems: currentMenuItems});
  },
  addItem: function(item){
    console.log(item);
    return null;
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
  addItem: function(item){
    this.props.addItem(item);
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
        <MenuList data={this.state} addItem={this.addItem}/>
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
  componentWillMount: function(){
  },
  handleChange: function(event){
    // console.log(this);
    // this.setState({itemQty:event.target.value})
  },
  addItem: function(item){
    this.props.addItem(item);
  },
  render: function(){
    //Rendering menu List
    // console.log(this.props);
    // var self = this;
    // var listedItems = this.state.menuItems;
    // var refinedList = listedItems.map(function(item, index){
    //   return (
    //     <li key={index}>
    //       <div className="col-xs-4">
    //         {item.name}
    //       </div>
    //       <div className="col-xs-4">
    //         {item.price}
    //       </div>
    //       <div className="col-xs-4">
    //         <div className="input-group">
    //           <input className="form-control"
    //             placeholder="Qty"
    //
    //             onChange= {self.handleChange}
    //           />
    //           <span className="input-group-btn">
    //             <button className="btn"
    //               onClick={function(e){
    //                 e.preventDefault();
    //                 self.addItem(item);
    //               }}
    //             >
    //               Order This
    //             </button>
    //           </span>
    //         </div>
    //       </div>
    //     </li>
    //   )
    // });
    return(
      <ul className="order-items">
        <MenuListItem data={this.state} addItem={this.addItem} />
      </ul>
    )
  }
});

var MenuListItem = React.createClass({
  getInitialState: function(){
    console.log('init', this);
    var menuItems = this.props.data.menuItems;
    return {menuItems: menuItems}
  },
  handleChange:function(event){

    console.log(this.state);
    this.setState({qty:event.target.value});
  },
  addItem: function(item){
    console.log('menu list item');
    this.props.addItem(item);
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
                <button className="btn"
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
