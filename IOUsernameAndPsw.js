var users={
	'admin':'123',
	'zxp':'521',
}
process.stdout.write('Input your username pls');
var username='';
process.stdin.on('data',(input)=>{
	input=input.toString().trim();
	if(username===''){
		if(Object.keys(users).indexOf(input)===-1){
			process.stdout.write('Input Valid Username pls'+'\n');
		}
		else{
			process.stdout.write('Input your Password pls');
			username=input;
		}
	}
	else{
		if(input===users[username]){
			console.log('Login Successed');
		}
		else{
			process.stdout.write('Input the right password pls');
		}
	}
});