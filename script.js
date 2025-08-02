window.addEventListener('DOMContentLoaded', processArray);
function processArray(){
	const array = [1,2,3,4]
	new Promise((resolve) => {
		setTimeout(()=>{
			const even_numer = array.filter(num => num%2 ==0)
			document.getElementById('output').textContent = even_numer.join(',');
			resolve(array)
		},1000)
	}).then(array=>{
			return new Promise((resolve)=>{
				setTimeout(()=>{
					const double_even = array.filter(num => num%2 ==0).map(num => num*2)
					document.getElementById('output').textContent = double_even.join(',')
					resolve()
				},3000)
			})
		}).catch(error=>{
		console.log(error)
		})
}