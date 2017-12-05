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
    var Faculties=[]
    var fields=[]

    $('.computersci').filter(function(){
        var data = $(this);
        // var node=data.clone().children().remove().end().text();      
        // var node =data.find('b:nth-of-type(2)').nextUntil(data.find('b:nth-of-type(3)')).text()  
        // Faculties.push(data.text())
        // json.name = name;

        // var emails=$(foo).nextUntil(bar,node).text();
        node=data.children('a:first-of-type').text();
        fields.push(node)

    })

    console.log(fields)
}


// fs.writeFile('output1.json', JSON.stringify(json, null, 4), function(err){

//     console.log('File successfully written! - Check your project directory for the output.json file');

// })

res.send(JSON.stringify(`${fields.length} \n ${fields}`))

    }) ;
})


app.listen('8081')
exports = module.exports = app;