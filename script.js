window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let outputDiv = document.getElementById("output");

// Create 5 promises, each resolving with a random delay between 1–5 seconds
for (let i = 0; i < 5; i++) {
  const delay = Math.floor(Math.random() * 5) + 1; // seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(delay), delay * 1000);
  });
  window.promises.push(promise);
}

// Use Promise.any to wait for the first resolved promise
Promise.any(window.promises)
  .then((result) => {
    outputDiv.textContent = result;
  })
  .catch(() => {
    outputDiv.textContent = "All promises rejected";
  });
