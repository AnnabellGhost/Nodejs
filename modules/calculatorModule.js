function convert(sth){
	return parseFloat(sth);
}
function add(a,b){
	return convert(a)+convert(b);
}
module.exports={add};