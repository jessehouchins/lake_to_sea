define([
	"underscore",
	"backbone"
],

function(_, Backbone){

	var count = 0

	return Backbone.Model.extend({
	
		defaults: function(){
			return {
				position: 0,
				name: "Player " + (++count)
			}
		},
		
		initialize: function(opts){
			this.name = opts.name
		}
		
	})

})