define([
  "underscore",
  "backbone"
],

function(_, Backbone){

  var Settings = Backbone.Model.extend({

    defaults: {
      soundOn: true
    },
    
    initialize: function(opts){
      console.log('Settings#initialize')
    }
    
  })

})