
/*
 * GET home page.
 */

exports.index = function(req, res) {
	//if(!req.params.page)
  //	res.render(req.params.page);
  //else
  res.render('index');
};

exports.pages = function(req, res) {
	res.render(req.params.page);
};
