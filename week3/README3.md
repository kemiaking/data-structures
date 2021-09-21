MSDV Data Structures Fall 2021
Assignment Two

Before any coding was started, I obtained an API key from Texas A&M and saved it in a .env file and that is kept away using a .gitignore file

A starter code was used. 

"use strict"

// dependencies
const fs = require('fs'),
      querystring = require('querystring'),
      got = require('got'),
      async = require('async'),
      dotenv = require('dotenv'),
      path = require('path');

async, dotenv, and querystring were all installed in the terminal.

// TAMU api key
dotenv.config();
const API_KEY = process.env.API_KEY;
const API_URL = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx'

// geocode addresses
let meetingsData = [];


const dataDir = path.join(__dirname + '/week2/streetAddress.json') ;
var addresses = JSON.parse(fs.readFileSync(dataDir)).split('\n');

console.log(addresses)


My API Key was defined in another file and the url was provided.

An empty array was created to hold the data from the meeting addresses. 
A path was then created so that the addresses from the file from Assignment Two would be taken and then Texas A&M could geocode them. 


// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    let query = {
        streetAddress: value,
        city: "New York",
        state: "NY",
        apikey: API_KEY,
        format: "json",
        version: "4.01"
    };


the async.eachSeries function makes sure that each item in series complete in order, one at a time. 


 // construct a querystring from the `query` object's values and append it to the api URL
    let apiRequest = API_URL + '?' + querystring.stringify(query);

    (async () => {
    	try {
    		const response = await got(apiRequest);
    		let tamuGeo = JSON.parse(response.body);
    		console.log(tamuGeo['FeatureMatchingResultType'], apiRequest);
    		meetingsData.push(tamuGeo);
    	} catch (error) {
    		console.log(error.response.body);
    	}
    })();


querystring helps parse and format URL query strings. querystring.stringify helps turns an array into a readable string.


// sleep for a couple seconds before making the next request
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('week3/addressLatLong.json', JSON.stringify(meetingsData));
    console.log('*** *** *** *** ***');
    console.log(`Number of meetings in this zone: ${meetingsData.length}`);
});

The meeting data is then written out into a json file and console prints out the number of data. 