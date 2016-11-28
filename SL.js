var path=require('path');
var fs=require('fs');
var iconv=require('iconv-lite');
fs.readFile(path.join(__dirname,'./Faded.lrc'),(error,data)=>{
	var lines=iconv.decode(data,'gbk').split('\n');
	// console.log(lines.length);
	var regex=/\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
	var startTime=new Date().getTime();
	lines.forEach((line)=>{
		var matches=regex.exec(line);//返回值字符串数组0为整个1为第一个匹配的括号内的
		if (matches) {
			var m = parseFloat(matches[1]);
			var s = parseFloat(matches[2]);
			var f = parseFloat(matches[3]);
			var lyric = matches[4];
			var offTime = new Date().getTime() - startTime;
			setTimeout(() => {
				console.log(lyric);
			}, m * 60 * 1000 + s * 1000 + f - offTime);
		}
		else{
			console.log(line);
		}
	});
});