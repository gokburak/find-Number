let findNumber = document.getElementById("number");
let buttonCheck = document.getElementById("check");
let writeText = document.querySelector(".write");
let winnerText = document.getElementById("winner");
let kalanHak = document.getElementById("winner");
let ilk_değer = document.getElementById("ilk_değer");
let son_değer = document.getElementById("son_değer");

let randomNumber = Math.floor(Math.random() * 100) + 1;

// hak = 0;
let count = 0;
buttonCheck.addEventListener("click", () => {
  let userInput = findNumber.value;

  if (userInput < 1 || userInput > 100) {
    alert("Lütfen 1 ve 100 arasında bir sayı giriniz");
  } else if (userInput < randomNumber) {
    kalanHak.innerHTML--;
    ilk_değer.innerHTML = findNumber.value;
    count += 1;
    // alert(`${findNumber.value} ile 100 arası gir `);
    findNumber.value = "";
    if (kalanHak.innerHTML == 0) {
      result.innerText = "You Lost!";
      result.style.color = "red";
      result.style.fontSize = "3rem";
    }
    // hak += 1;
  } else if (userInput > randomNumber) {
    kalanHak.innerHTML--;
    son_değer.innerHTML = findNumber.value;
    count += 1;

    findNumber.value = "";
    if (kalanHak.innerHTML == 0) {
      result.innerText = "You Lost!";
      result.style.color = "red";
      result.style.fontSize = "3rem";
    }
    // alert("Lütfen sayınızı azaltın");
    // hak += 1;
  } else if (userInput == randomNumber) {
    findNumber.value = "";
    count += 1;

    // writeText.style.display ="none"
    writeText.innerHTML = "";
    result.innerText = "You Win!";
    result.style.color = "Blue";
    result.style.fontSize = "3rem";
    alert(`Tebrikler ${count} defa da bildiniz `);
    // button.disabled = false
  }

  //   winner.innerHTML = hak;
});
