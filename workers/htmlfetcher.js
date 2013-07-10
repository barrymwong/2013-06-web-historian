// access sites.txt
// grab list of sites and turn into an array
// set urls to that array
var datadir = "../data/sites.txt"; 

var fs = require("fs");
var urls = fs.readFileSync(datadir, 'utf8').split('\n').slice(0, -1);
var helpers = require('./lib/html-fetcher-helpers');
helpers.readUrls(urls, helpers.downloadUrls);