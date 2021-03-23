
const emotion = require('./apis/emotion.js');

let paralleldots = {
	
	apiKey: undefined,

	
	emotion: function(text,lang_code="en"){
    console.log("In emotion function")
		return emotion(text,lang_code,this.apiKey)
	}

}

module.exports = paralleldots;
