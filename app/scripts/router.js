var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var introPage = require('./components/intro.jsx');
var menuPage = require('./components/menu.jsx');
var orderPage = require('./components/order.jsx');
var adminPage = require('./components/employeeview.jsx');

var AppRouter = Backbone.Router.extend({
  routes : {
    '': 'index',
    'menu': 'menu',
    'order': 'order',
    'admin': 'admin'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(introPage),
      document.getElementById('app')
    );
  },
  menu: function(){
    ReactDOM.render(
      React.createElement(menuPage),
      document.getElementById('app')
    );
  },
  order: function(){
    ReactDOM.render(
      React.createElement(orderPage),
      document.getElementById('app')
    );
  },
  admin: function(){
    ReactDOM.render(
      React.createElement(adminPage),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
