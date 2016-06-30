let fun = {
	a:1,
	say:  function(){
		return this.a
	}
};

Spy = (target, method) => {
	let changed = target[method]

	let res = {
		count: 0
	}

	target[method] = function() {
		res.count++
		return changed.apply(this, arguments)
	}	
	return res
}


spy = Spy(fun,'say')
fun.say() // 1
spy.count // 1
fun.say() // 1
spy.count // 2
fun.say() // 1
spy.count // 3


