/*
 * ls
 * https://github.com/moonreplace/grunt-png8
 *
 * Copyright (c) 2014 Chris Dai
 * Licensed under the MIT license.
 */

'use strict';

var png8_conventer = require('../lib/png8.js');
var path = require('path');
var fs = require('fs');
var waitpid = require('waitpid');

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
			grunt.fail.fatal('Please provide the source files');
		}
		//extension file name	
		var ext = options.ext;
		//dest dir
		var dest = f.dest;
		
		if (!grunt.file.isDir(dest)) {
			grunt.file.mkdir(dest);
			grunt.log.writeln(dest + ' folder has been created');
		}
		
		/*
		* dealDest
		* @param source, source file
		* @desc copy the source files to dest folder
		*/
		var dealDest = function(source) { 
			var srcPath = path.resolve(path.dirname(source), '.');
			var files = fs.readdirSync(srcPath);

			files.forEach(function(fileName) {
				
				grunt.log.ok(fileName);

				if (grunt.file.isMatch(['*', ext].join(''), fileName)) {
					var temp = [srcPath, fileName].join(path.sep);
					var target = [path.resolve(dest, '.'), fileName].join(path.sep); 

					var sourceSize = fs.lstatSync(source).size;
					var tempSize = fs.lstatSync(temp).size;
					grunt.log.ok('sourceSize: ' + sourceSize);
					grunt.log.ok('targetSize: ' + tempSize);

					grunt.file.copy(temp, target);
					//calcu compressed rate	
					grunt.log.ok(['compressed: ',Math.round(tempSize / sourceSize * 100, 2), '%'].join('')); 
					grunt.file.delete(temp);
				}
			});
		};

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
		var child = png8_conventer.exec();
		var stats = waitpid(child.pid);
		dealDest(filepath);	
      });
    });
  });

};
