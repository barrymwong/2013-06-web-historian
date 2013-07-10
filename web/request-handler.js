exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.

exports.handleRequest = function (req, res) {
  // response 200 to a GET
  // check URL
  // end a response
  if(req.method == "GET"){
    res.writeHead(200);
    res.end();
  }
};
