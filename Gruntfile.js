module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({

    // Project metadata
    pkg   : grunt.file.readJSON('package.json'),
    site  : grunt.file.readYAML('_config.yml'),

    // Before generating any new files, remove files from previous build.
    clean: {
      example: ['<%= site.dest %>/*']
    },

    // Build output from templates and data
    assemble: {
      options: {
        flatten: true,
        production: false,
        assets: '<%= site.assets %>',

        // Metadata
        pkg: '<%= pkg %>',
        site: '<%= site %>',
        data: ['<%= site.data %>'],

        // Templates
        partials: '<%= site.includes %>',
        layoutdir: '<%= site.layouts %>',
        layout: '<%= site.layout %>',
        ext: '',

        // Extensions
        helpers: '<%= site.helpers %>'
      },
      example: {
        options: {
          ext: '.md'
        },
        files: {
          '<%= site.dest %>/example': ['<%= site.templates %>/example.hbs']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['clean', 'assemble']);

};
