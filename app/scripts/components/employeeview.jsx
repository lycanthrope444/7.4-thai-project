var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models');

var EmployeeContainer = React.createClass({
  initial: function(){
    var orderCollection = new models.ActiveOrderCollection();
    return {
      orderCollection: orderCollection
    };
  },
  componentWillMount:function(){
    // this.state.orderColection.fetch.done(function(){
    //   // console.log(this.state.orderCollection);
    // });
  },
  render: function(){
    return (
      <div className="container">
        Pending Orders:
        <PendingOrderView />
          <a href="#menu">
            What's in this?
          </a>
          <a href="#order">
            I'm Ready to order
          </a>
      </div>
    )
  }
});

var PendingOrderView = React.createClass({
  render: function(){
    return(
      <ul>
        Pending Order List
      </ul>
    )
  }
});

module.exports = EmployeeContainer;
