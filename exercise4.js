var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(error, data){
	if(error){
	console.log('Error');
	return error;
	}
	else{
	console.log(data);
	var new_lines = data.split('\n').length - 1;
	console.log(new_lines);
	}
});