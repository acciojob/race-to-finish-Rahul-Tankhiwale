window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let outputDiv = document.getElementById("output");

function createPromise(name){
	const time = Math.floor(Math.random() * 5 + 1) * 1000;
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`Promise ${name} resolved in ${time / 1000}s`);
		}, time)
	})
}

for(let i =0; i<5; i++){
	window.promise.push(promises)
}

Promise.any(windowa.promise)
.then((result)=>{
	outputDiv .textContent = result;
})
.catch((err)=>{
	 outputDiv.textContent = "All promises rejected";
})