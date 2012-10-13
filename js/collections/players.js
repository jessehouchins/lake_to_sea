define([
	"underscore",
	"backbone",
	"models/player"
],

function(_, Backbone, Player){

	return Backbone.Collection.extend({

		model: Player

	})

})