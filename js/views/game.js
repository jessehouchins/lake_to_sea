define([
  "underscore",
  "backbone",
  "views/base",
  "text!tmpl/game.html",
  "models/game"
],

function(_, Backbone, BaseView, tmpl, Game){
  
  return BaseView.extend({

    id: 'Game',
    template: tmpl,

    initialize: function(opts){
      (opts || (opts = {}))
      console.log('GameView#initialize')
      this.newGame(opts.game)
    },

    newGame: function(){
      console.log('GameView#newGame')
      delete this.model
      this.model = new Game()
    },

    quitGame: function(){
      this.destroy()
      this.model.destroy()
    }

  })

})