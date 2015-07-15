require('./exercise6_one.js')(process.argv[2], process.argv[3], function(err, data){
	if(err){
		return console.log(err);
	}else{
			data.forEach(function(entry){
				console.log(entry);
			});			
	}
});