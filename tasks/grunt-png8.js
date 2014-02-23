/*
 * ls
 * https://github.com/moonreplace/grunt-png8
 *
 * Copyright (c) 2014 Chris Dai
 * Licensed under the MIT license.
 */

'use strict';

var png8_conventer = require('../lib/png8.js');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('png8', 'Convert png32, png24 to png8, and reserve all alpha transparent', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
		'ext': '.png'
	});

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
		if (f.src.length === 0) {
			grunt.log.error('Please provide the source files');
		}

		// Concat specified files.
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
		png8_conventer.options = options;
		png8_conventer.options['src'] = filepath;		
		png8_conventer.exec();	
      });

    });
  });

};
