c# data-structures
MSDV Data Structures Fall 2021
Assignment Two
My ID ends with 5 so I used the MLA5.txt file created in Assignment One. 

<b>Started by using the starter code given to us</b> 

// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/thesis.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
$('h3').each(function(i, elem) {
    console.log($(elem).text());
});

// write the project titles to a text file
var thesisTitles = ''; // this variable will hold the lines of text

$('.project .title').each(function(i, elem) {
    thesisTitles += ($(elem).text()).trim() + '\n';
});

fs.writeFileSync('data/thesisTitles.txt', thesisTitles);

I installed cheerio, which helps to parse HTMLs. The HTML file I had was basically a bunch of tables within tables and there was no easy way to get the info needed (the addresses), because it is incredibly messy. Cheerio helps to parse the HTML into an object that is easier to parse down even further.

I read the file with fs.readFileSync
Then loaded the content into a cheerio object.

// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/MLA5.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);


To make sure that the addresses would print correctly, before they were written into a file, they were printed onto the console. 

//print (to the console the street addresses)

$('td').each(function(i, elem) {
    if($(elem).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
    console.log($(elem).text().split('\n')[3
    ].trim().split(',')[0]);
    } });
    
In my HTML, I noticed that the street names I needed were in a td and had a specific style description. I used that attribute and then split the lines. I parsed it down further by choosing only the 4th element in the array that was made, which is where the addresses were. From there they were split again by the commas and then the first element was selected, so that only the addresses reamined. 


// write the project titles to a text file
var streetAddress = []; // this variable will hold the lines of text

$('td').each(function(i, elem) {
    if($(elem).attr("style")==='border-bottom:1px solid #e3e3e3; width:260px'){
    streetAddress += ($(elem).text().split('\n')[3
    ].trim().split(',')[0]) + '\n';
    } });
    
fs.writeFileSync('week2/streetAddress.json', JSON.stringify(streetAddress));

Once I was sure that the addresses were printed correctly in the console, I created a variable called streetAddress, which became an empty array to hold the lines of text.
From there I wrote a json file that contains the addresses. 
