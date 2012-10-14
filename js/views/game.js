define([
  "underscore",
  "backbone",
  "views/base",
  "models/game"
],

function(_, Backbone, BaseView, Game){
  
  return BaseView.extend({

    initialize: function(opts){
      (opts || (opts = {}))
      console.log('GameView#initialize')
      this.newGame(opts.game)
    },

    newGame: function(){
      console.log('GameView#newGame')
      delete this.model
      this.model = new Game()
    }

  })

})