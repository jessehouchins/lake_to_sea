require.config({

  paths: {

    "underscore": "libs/underscore.req.min",
    "backbone": "libs/backbone.req.min",

    // Require.js Plugins
    // text : "plugins/text",
    // image : "plugins/image",
  }

})

// Setup app requirements
require([
  'underscore',
  'backbone',
  'views/app'
],

// Load the app
function(_, Backbone, App) {
  new App()
})
