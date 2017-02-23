var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var router = require('./router.js');

$(function(){
  Backbone.history.start();
});
