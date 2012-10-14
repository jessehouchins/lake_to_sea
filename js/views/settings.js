define([
  "underscore",
  "backbone",
  "views/base",
  "models/settings"
],

function(_, Backbone, BaseView, Settings){
  
  return BaseView.extend({

    initialize: function(opts){
      (opts || (opts = {}))
      console.log('SettingsView#initialize')
    },

    sound: function(isOn){
      Settings.set('soundOn',On)
    }

  })

})