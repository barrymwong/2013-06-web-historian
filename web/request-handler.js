exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.

var url = require('url');

exports.handleRequest = function (req, res) {
  // Require URL
  // Request 'url' - parse required url - path
  // Split the path by '/'
  var path = url.parse(req.url).path.split('/');
  console.log(path);
  if(req.method === "GET"){
    res.writeHead(200);
    var result = '<input>';
    if(path[1]){
      result = path[1];
    }
    res.end(result);
  }
};
