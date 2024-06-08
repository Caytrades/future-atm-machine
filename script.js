let balance = 1000;

function checkBalance() {
    document.getElementById("output").innerHTML = "Your current balance is $" + balance;
}

function withdraw() {
    let amount = parseInt(document.getElementById("amount").value);
    if (isNaN(amount)) {
        document.getElementById("output").innerHTML = "Please enter a valid amount.";
    } else if (amount > balance) {
        document.getElementById("output").innerHTML = "Insufficient funds.";
    } else {
        balance -= amount;
        document.getElementById("output").innerHTML = "You have withdrawn $" + amount + ". Your current balance is $" + balance;
    }
}


window.onload = function() {
const canvas = document.getElementById("matrixCanvas");
const context = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0F0";
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

	setInterval(draw, 33);
};