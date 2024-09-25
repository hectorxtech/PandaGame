document.getElementById("spin-button").addEventListener("click", function() {
    let result = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").innerText = `You got: ${result}`;
});
