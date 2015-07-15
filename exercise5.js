var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(error, data){
	if(error)
		console.log('Error :: '+ error);
	/*
	for(var i=0; i<data.length; i++){
		if(data[i].split('.')[1] == process.argv[3]){
			console.log(data[i]);
		}
	}*/
var count = 0;
	data.forEach(function(file){
		if(path.extname(file) === '.'+process.argv[3]){
			console.log(file);
		count++;
	}
	})
	console.log(count);
});