const about = function(req, res){
    res.render('about',{title:'About my site'});
};
module.exports = {
    about
};