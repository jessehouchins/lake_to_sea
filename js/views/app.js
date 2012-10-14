define([
  "underscore",
  "backbone",
  "views/base",
  "text!tmpl/menu.html",
  "views/game",
  "views/about",
  "views/settings"
],

/*///  MAIN MENU  /////

  Play
  About
  Setting

/////////////////////*/

function(_, Backbone, BaseView, tmpl, GameView, AboutView, SettingsView){
  
  return BaseView.extend({

    initialize: function(opts){
      (opts || (opts = {}))
      console.log('Menu#initialize')
    },

    play: function(){
      console.log('Menu#play')
      // show game view
    },

    about: function(){
      console.log('Menu#about')
      // show about view
    },

    settings: function(){
      console.log('Menu#settings')
      // show settings view
    }

  })

})