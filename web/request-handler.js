exports.datadir = __dirname + "/data/sites.txt"; // tests will need to override this.
var url = require('url');
var fs = require('fs');

exports.handleRequest = function (req, res) {

  var path = url.parse(req.url).path.split('/');

  if(req.method === "GET"){
    var result = '<input>';

    var fileContents = fs.readFileSync(exports.datadir, 'utf8');
    var re = new RegExp(path[1]);
    var test = re.test(fileContents);

    if(path[1]){
      if(test){
        res.writeHead(200);
        result = path[1];
        res.end(result);
      } else {
        res.writeHead(404);
        res.end();
      }
    } else {
      res.writeHead(200);
      res.end(result);
    }

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