define([
  "underscore",
  "backbone",
  "views/base"
],

function(_, Backbone, BaseView){
  
  return BaseView.extend({

    initialize: function(){
      console.log('About#initialize')
    }

  })

})