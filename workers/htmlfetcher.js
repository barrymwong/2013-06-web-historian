var fs = require("fs");
var helpers = require('./lib/html-fetcher-helpers');
var datadir = "../data/sites.txt";

var urls = fs.readFileSync(datadir, 'utf8').split('\n').slice(0, -1);
helpers.readUrls(urls, helpers.downloadUrls);