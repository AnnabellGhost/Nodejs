'use strict'

let args=process.argv.slice(2);
if(args.length!==3){throw new Error('Wrong Parametor')}
/*let result=eval(`${args[0]} ${args[1]} ${args[2]}`);
console.log(result);*/
//Second solution:
let result;
const cal=require('./modules/calculatorModule.js');
switch(args[1]){
	case '+':
	result=cal.add(args[0],args[2]);
	break;
	default:
	break;
}
console.log(result);