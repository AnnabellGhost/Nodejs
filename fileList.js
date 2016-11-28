var fs=require('fs');
var fileList=[];
var count=0;
var format='';
function walkThrough(path){
	var dirList=fs.readdirSync(path);
	for(i=1;i<=count;i++){
		format=format+'   ';
	}
	dirList.forEach((item)=>{
		if(fs.statSync(path+'/'+item).isFile()){
			fileList.push(format+'-'+path+'/'+item);
		}
	});
	dirList.forEach((item)=>{
		if(fs.statSync(path+'/'+item).isDirectory()){
			fileList.push(format+'+'+path+'/'+item);
			count+=1;
			walkThrough(path+'/'+item);
		}
	});
}
walkThrough('D:/Books');
console.log(fileList);