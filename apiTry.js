const path=require('path');
const temp=path.join(__dirname,'./t.txt');
//console.log(path.basename(temp,'.txt'));

//path.delimiter默认分隔符 ：；
//神秘的出现了以前设置的PATH变量
console.log(process.env.PATH.split(path.delimiter));

console.log(path.dirname(temp));

//path.extname(p)获取路径中的扩展名带点
var obj=path.parse(temp);//路径字符串转成对象包含上面的几个属性
//path.format(pathObject); 将上面那个路径对象转换成字符串

console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../modules'));