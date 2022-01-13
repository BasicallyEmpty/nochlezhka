console.log("Йоу");

const buyTicket = document.querySelector(".popup_type_buy-ticket");
const closeBtn = buyTicket.querySelector("#buy-ticket-close-button");
const ticketPrice = buyTicket.querySelector("#buy-ticket-price");
const addBtn = buyTicket.querySelector("#add-button")
const subtractButton = buyTicket.querySelector("#subtract-button");
const amountInput = buyTicket.querySelector("#ticket-amount-input");
amountInput.value = 0;

let array = [];
array = ticketPrice.textContent.split(" ");
array.pop();
console.log(array);
let number = array[0];
console.log(number);



addBtn.addEventListener("click", function () {
  let count = amountInput.value;
  count++;
  amountInput.value = count;  
  number = count * number;
  ticketPrice.textContent = number;
})

subtractButton.addEventListener("click", function () {
  let count = amountInput.value;
  if(count > 0) {
    count--;
  amountInput.value = count;
  number = count / number; 
  ticketPrice.textContent = number; 
  }  
})


//Получить значение из инпута

//Менять ипут при нажатии + - 

//Умножать стоимость на кол во инпута

closeBtn.addEventListener("click", function () {
  buyTicket.classList.toggle("popup_opened");
});