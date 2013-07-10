exports.datadir = __dirname + "/data/sites.txt"; // tests will need to override this.
var url = require('url');
var fs = require('fs');

exports.handleRequest = function (req, res) {
  // handle POSTs
  // respond with end
  // respond writeHead 320
  // write the input data to fileContents

  var path = url.parse(req.url).path.split('/');
  if(req.method === "GET"){
    res.writeHead(200);
    var result = '<input>';
    if(path[1]){
      result = path[1];
    }
    res.end(result);
  } else if(req.method === 'POST') {
    var data;
    req.on('data', function(chunk) {
      data = chunk;
    });
    req.on('end', function() {
      data = data.substring(4) + '\n';
      fs.writeFileSync(exports.datadir, data);
      res.writeHead(302);
      res.end();
    });
  }


};