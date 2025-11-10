window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let p1 = Promise.resolve("P1", 1000);
let p2 = Promise.resolve("P2", 2000);
let p3 = Promise.resolve("P3", 3000);
let p4 = Promise.resolve("P4", 4000);
let p5 = Promise.resolve("P5", 5000);

Promise.any([p1,p2,p3,p4,p5])
.then((res)=>{
	console.log(result);
})
.catch((err)=>{
	console.log(err);
})
