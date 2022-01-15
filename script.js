console.log("Йоу");

const buyTicket = document.querySelector(".popup_type_buy-ticket");
const closeBtn = buyTicket.querySelector("#buy-ticket-close-button");
const ticketPrice = buyTicket.querySelector("#buy-ticket-price");
const addBtn = buyTicket.querySelector("#add-button")
const subtractButton = buyTicket.querySelector("#subtract-button");
const amountInput = buyTicket.querySelector("#ticket-amount-input");
const emailInput = buyTicket.querySelector("#email");
const form = buyTicket.querySelector("#buy-ticket");
amountInput.value = 0;





addBtn.addEventListener("click", function () {
  let array = [];
array = ticketPrice.textContent.split(" ");
array.pop();
console.log(array);
let number = parseInt(array[0]);
console.log(number);
  amountInput.value++;
  let price = number + 500;
  ticketPrice.textContent = price + " Р";
  console.log(price);
  console.log(number);
  
 
})

subtractButton.addEventListener("click", function () {
  let array = [];
  array = ticketPrice.textContent.split(" ");
  array.pop();
  console.log(array);
  let number = parseInt(array[0]);
  console.log(number);
    amountInput.value++;
    let price = number - 500;
    ticketPrice.textContent = price + " Р";
    console.log(price);
    console.log(number);
    
})


function submitCard(event) {
  
	event.preventDefault();	
  const clientInfo = {};
  clientInfo.email = emailInput.value;
  clientInfo.price = ticketPrice.textContent;
  console.log(clientInfo);
}


//Получить значение из инпута

//Менять ипут при нажатии + - 

//Умножать стоимость на кол во инпута

closeBtn.addEventListener("click", function () {
  buyTicket.classList.toggle("popup_opened");
});

form.addEventListener("submit", submitCard);