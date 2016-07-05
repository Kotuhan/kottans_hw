function Calculator() {
}
Calculator.prototype.add = (numbers) => {

	if (numbers === '') return 0

	let summ = 0
	let pattern
	let negatives = [];

	if (numbers.match(/\[(.+?)\]/g)) {
		let delimiters = numbers.match(/\[(.+?)\]/g)
		delimiters = delimiters.map((item) => {
			item = item.substring(1,item.length-1)
			
			item = item
				.split('')
				.map((itm) => '\\'+itm)
				.join('')

			
			console.log(item)
			return item
		})
		numbers = numbers.slice(numbers.search(/\n/)+1)




		pattern = RegExp('('+delimiters.join('|')+')','g')

	} else 	if (numbers.match(RegExp('^//(.+)\\n'))) {
		let newarr = numbers.match(RegExp('^//(.+)\\n'))
		let delimiter = newarr[1]
		let lengthToSlice = newarr.length
		numbers = numbers.slice(lengthToSlice)

		pattern = RegExp(delimiter, 'g')
	} else pattern = /[\n,]/g

	
	var numbs = numbers.split(pattern).map(function(item) {
		item = parseInt(item, 10)
		if (item<0) {negatives.push(item)}
			else if(item<1000) return item
				else return 0

	})

	numbs.forEach((item) =>{
		summ += item
	})

	if (negatives.length>0){
		throw new TypeError('negatives are not allowed:' + negatives.join(','))
	} else return summ

	
};