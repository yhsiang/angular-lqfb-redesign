var fs = require('fs'),
//	path = require('path'),
	Lazy = require('lazy.js'),
	filename = process.argv[2];
	var json = {};
Lazy.readFile(filename)
  .lines()
  .each(function (line) {
  	if(!line.match(/^#/) && !line.match(/^}/) && !line.match('return')){
  		var str = line.split('='),
  			field = str[0].replace(/^\[\"/, '').replace(/\"\]/, '').replace(/ $/,''),
  			attr = str[1].replace(/^ /,'').replace(/\"/g, '').replace(';','');
  		json[field] = attr;
  	}
  	if(line.match(/^}/)) output();
  });

function output()
{
	var newfilename = filename.replace('lua','json');
	fs.writeFile(newfilename, JSON.stringify(json), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
	}); 
}