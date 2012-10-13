define([
	"underscore",
	"backbone",
	"collections/players"
],

function(_, Backbone, GameView){

	return Backbone.Model.extend({
		
		initialize: function(opts){
			console.log('AppModel#initialize')
		},

		showMenu: function(){
			console.log('App#showMenu')
		},

		showGame: function(){
			console.log('App#showMenu')
		},

		newGame: function(){
			this.Game
			console.log('App#showMenu')
		}
		
	})

})