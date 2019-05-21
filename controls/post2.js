const getposts = function(req,res){
	res.json({
		posts: [{ title: "first post"},{ title: "second post"}]
	});
}
module.exports = {
	getposts
}