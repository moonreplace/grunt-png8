var execFile = require('child_process').execFile;
var binPath = require('pngquant-bin').path;

var options = [];
options.push('--force');
options.push('--iebug');

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
	execFile(binPath, params, function(error, stdout) {
		if (error) {
			console.log('there is error when execute');
		}
		console.log('png has been converted');	
	});
};
		
exports.options = {
	ext: '.png',
	src: ''
};

exports.exec = exec;
