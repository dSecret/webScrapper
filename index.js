var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/', function(req, res){

url = 'http://nitdelhi.ac.in/?page_id=11979';

request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);

    var name,field
    var json = { name:"",field:""};

    $('.computersci a').filter(function(){
        var data = $(this);
        name = data.text();            

        json.name = name;
    })
}


fs.writeFile('output1.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

res.send('Check your console!')

    }) ;
})


app.listen('8081')
exports = module.exports = app;