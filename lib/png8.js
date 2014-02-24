var execFile = require('child_process').execFile;
var binPath = require('pngquant-bin').path;

var options = [];
options.push('--force');
options.push('--iebug');

/*
* exec
* @desc it will convert png image to png8
* @return child_process
*/
var exec = function() {
	var params = [];
	//parse the parameter which passed
	var keys = Object.keys(this.options);
	var me = this;
	keys.forEach(function(key) {
		if (key == 'ext') {
			params.push(['--ext', me.options[key]].join('='));
		} else {
			params.push(me.options[key]);
		}
	});
	//save the original params
	options.forEach(function(item) {
		params.push(item);
	});
	var child = execFile(binPath, params, function(error, stdout, stderr) {
		if (error) {
			console.log('there is error when execute');
		}

		console.log(stderr);
		console.log('png has been converted');	
	});
	return child;
};
		
exports.options = {
	ext: '.png',
	src: ''
};

exports.exec = exec;
