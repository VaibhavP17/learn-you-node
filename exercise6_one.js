var fs = require('fs');
var path = require('path');

module.exports = function(directory, filter, callback){
	filter = '.'+filter;
	fs.readdir(directory, function(err, data){
		if(err){
			console.log('error in fs.readdir', err);
			return callback(err);
		}else{
			//console.log('success in fs.readdir', data);
			callback(null, data.filter(function(entry){
				return path.extname(entry) === filter;
			}));
		}
	});
}
