function typeOf(arg){
	switch(typeof arg){
		case 'function':
			return 'object';
		case 'object':
			if(arg===null){
				return 'null';
			}
		default:
			return typeof arg;
	}
}