define([
	'underscore',
	'backbone',
	'models/app'
],

function(_, Backbone, App){

	return Backbone.View.extend({

		initialize: function(){
			console.log('App#initialize')
			this.model = new App()
		}

	})

})