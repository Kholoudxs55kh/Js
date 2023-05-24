function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100
    document.getElementById("numberDisplay").innerHTML = randomNumber
  }
