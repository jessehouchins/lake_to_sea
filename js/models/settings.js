define([
  "underscore",
  "backbone"
],

function(_, Backbone){

  var Settings = Backbone.Model.extend({

    defaults: {
      muted: false
    },
    
    initialize: function(opts){
      console.log('Settings#initialize')
    }
    
  })

  return Settings.instance || (Settings.instance = new Settings())

})