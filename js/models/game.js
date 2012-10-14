define([
  "underscore",
  "backbone"
],

function(_, Backbone){

  return Backbone.Model.extend({
  
    initialize: function(){
      console.log('GameModel#initialize')
    }

  })

})