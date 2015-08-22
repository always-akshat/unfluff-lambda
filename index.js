/**
 * Created by akshat on 19/8/15.
 */
var extractor = require('unfluff');
var request = require('request');
exports.handler = function(event, context) {
    request(decodeURI(event.key1), function(err, response, body){
        if(!err && response.statusCode == 200){
            data = extractor.lazy(body);

            var result = {
                title : data.title(),
                favicon : data.favicon(),
                text : data.text(),
                image : data.image(),
                canonicalLink : data.canonicalLink(),
                lang : data.lang(),
                description : data.description()
            };
            console.log(result);
            context.succeed(result);  // Echo back the result
        }else{
            context.fail('Something went wrong');
        }
    });
};
