var http = require('http');
var bl = require('bl');
var count = 0;
var results = [];

for(var i=0; i< 3; i++){
	httpGet(i);
}

function printOut(){
	for(var i=0;i<3;i++){
		console.log(results[i]);
	}
}
function httpGet(index){
	http.get(process.argv[index+2], function(response){		
		response.pipe(bl(function(err, data){
			if(err){
				return console.error('Error ::', err);
			}else {
				results[index] = data.toString();
				count++;
			}
			if(count === 3){
				printOut();
			}
		}))
	})
}