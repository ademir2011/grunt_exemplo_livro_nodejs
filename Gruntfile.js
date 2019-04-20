module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    cssmin: {
      with_banner: {
        options: {
          banner: "/*" + "Minified CSS of <%= pkg.name %>" + "*/\n"
        },
        files: {
          "public/css/all.min.css": ["src/css/normaset.css", "src/css/main.css"]
        }
      }
    },
    uglify: {
      options: {
        banner: "/* Minified JavaScript of <%= pkg.name %> */\n"
      },
      my_target: {
        files: {
          "public/javascript/all.min.js": ["src/js/vendor/*.js", "src/js/*.js"]
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      css: {
        files: "src/css/*.css",
        tasks: ["cssmin"]
      },
      js: {
        files: "src/js/*.js",
        tasks: ["uglify"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["uglify", "cssmin"]);
};
