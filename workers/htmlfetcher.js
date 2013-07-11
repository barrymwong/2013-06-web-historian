var fs = require("fs");
var helpers = require('./lib/html-fetcher-helpers');
// var datadir = __dirname + "/../data/sites.txt";
var datadir = __dirname + "/../data/sites.txt";

var urls = fs.readFileSync(datadir, 'utf8').split('\n').slice(0, -1);
helpers.readUrls(urls, helpers.downloadUrls);