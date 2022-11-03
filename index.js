document.addEventListener("DOMContentLoaded",  function() {
    console.log("The DOM had loaded");
});

console.log(
    "The console.log() fires when index.js loades - before DOMContent Loaded is triggered"
);

const text = document.getElementById("text").textContent = "This is really cool!";
