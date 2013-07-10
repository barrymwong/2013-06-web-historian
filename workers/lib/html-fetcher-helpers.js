var _ = require('underscore');
var http = require('http-get');

exports.readUrls = function(filePath, cb){
  // fixme
  _.each(filePath, function(url){
    cb(url);
  });
};

exports.downloadUrls = function(url){
  http.get(url, '../data/sites/' + url, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log('File downloaded at: ' + result.file);
    }
  });
  return true;
};