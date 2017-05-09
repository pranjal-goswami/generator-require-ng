'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log(args);

  console.log('You just create the sub controller with the argument ' + this.name + '. Please link it with your main controller');
  this.uppercaseName = this.name.charAt(0).toUpperCase() + this.name.slice(1);

    this.moduleName = false;
    this.uppercaseModuleName = false;
    this.moduleChar =false;
  if(args[1]){
    this.moduleName = args[1];
    this.uppercaseModuleName = this.moduleName.charAt(0).toUpperCase() + this.moduleName.slice(1);
    this.moduleChar = this.moduleName.charAt(0);
  }
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  var module = false;
  if(this.args[1]){
    module = this.args[1];
    this.moduleName = this.args[1];
  }
  var prefix = 'app/src/' +(module?(module+'/'):'')+ this.name + '/';
  this.mkdir(prefix);
  this.template('controller-template.js'       , prefix + this.name + '.js');
  this.template('controller-template.spec.js'  , prefix + this.name + '.spec.js');
  this.template('controller-template.tpl.html' , prefix + this.name + '.tpl.html');
};
