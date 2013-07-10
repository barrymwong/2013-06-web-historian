var _ = require('underscore');

exports.readUrls = function(filePath, cb){
  // fixme
  _.each(filePath, function(url){
    cb(url);
  });
};

exports.downloadUrls = function(urls){
  // fixme
  return true;
};