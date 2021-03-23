const request = require('request');
const net = require('net');
const tls = require('tls');
let emotion = function(text,lang_code,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'http://apis.paralleldots.com/v3/emotion', form: {text:text,    api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
      
		 })
	})
}

module.exports = emotion;
