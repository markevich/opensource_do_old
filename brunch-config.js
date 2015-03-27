exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /web\/static\/js/,
        'js/vendor.js': /^(bower_components|web\/static\/vendor)/
      }
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: 'js/templates.js'
    }
  },

  // Phoenix paths configuration
  paths: {
    // Which directories to watch
    watched: ["web/static", "test/static"],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    ES6to5: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^(bower_components)|(vendor)/]
    }
  }
};
