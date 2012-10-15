define([
  "underscore",
  "backbone",
  "views/base",
  "text!tmpl/menu.html"
],

function(_, Backbone, BaseView, tmpl){
  
  return BaseView.extend({

    template: tmpl,
    id: 'Menu',

    initialize: function(opts){
      (opts || (opts = {}))
      console.log('MenuView#initialize')
    }

  })

})