define([
  "underscore",
  "backbone",
  "views/base",
  "views/menu",
  "views/game",
  "views/about",
  "models/settings"
],

/*///  MAIN MENU  /////

  Play
  About
  Mute

/////////////////////*/

function(_, Backbone, BaseView, MenuView, GameView, AboutView, Settings){
  
  return BaseView.extend({

    events: {
      'click .js-menu': 'showMenu',
      'click .js-play': 'playGame',
      'click .js-game': 'showGame',
      'click .js-quit': 'quitGame',
      'click .js-about': 'showAbout',
      'click .js-mute': 'toggleSound'
    },

    initialize: function(opts){
      (opts || (opts = {}))
      console.log('App#initialize')
      this.setElement($('#App'))
      this.showMenu()
    },

    showMenu: function(){
      console.log('App#Menu')
      if (!this.menuView) (this.menuView = new MenuView()).render()
      this.menuView.placeAt(this.$el, 'only')
    },

    playGame: function(){
      if (this.gameView) console.log('resume game')
      else console.log('new game')
      this.showGame()
    },

    showGame: function(){
      console.log('App#Game')
      if (!this.gameView) (this.gameView = new GameView()).render()
      this.gameView.placeAt(this.$el, 'only')
    },

    quitGame: function(){
      if (this.gameView) {
        this.gameView.quitGame()
        delete this.gameView
      }
      this.showMenu()
    },

    showAbout: function(){
      console.log('App#about')
      if (!this.aboutView) (this.aboutView = new AboutView()).render()
      this.aboutView.placeAt(this.$el, 'only')
    },

    toggleSound: function(){
      var muted = Settings.set('muted', !Settings.get('muted'))
      this.$el.toggleClass('muted', muted)
    }

  })

})