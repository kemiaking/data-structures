// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/MLA5.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

//print (to the console the street addresses)

$('td').each(function(i, elem) {
    if($(elem).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
    console.log($(elem).text().split('\n')[3
    ].trim().split(',')[0]);
    } });
    

// write the project titles to a text file
var streetAddress = []; // this variable will hold the lines of text

$('td').each(function(i, elem) {
    if($(elem).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
    streetAddress += ($(elem).text().split('\n')[3
    ].trim().split(',')[0]) + '\n';
    } });
    
fs.writeFileSync('week2/streetAddress.json', JSON.stringify(streetAddress));
