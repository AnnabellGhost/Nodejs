var argvs=process.argv.slice(2);
//normally written like node fileName.js Command Ect.. So we want the Third One Thats [2]
switch(argvs[0]){
	case "init":console.log("Initialize");
	break;
	case "install":
	var packageName=argvs[1];
	console.log("Installing package "+packageName);
	break;
	default:
	break;
}

