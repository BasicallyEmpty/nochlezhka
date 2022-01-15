console.log("(^^)");

const buyTicket = document.querySelector(".popup_type_buy-ticket");
const closeBtn = buyTicket.querySelector("#buy-ticket-close-button");
const ticketPrice = buyTicket.querySelector("#buy-ticket-price");
const addBtn = buyTicket.querySelector("#add-button");
const subtractButton = buyTicket.querySelector("#subtract-button");
const amountInput = buyTicket.querySelector("#ticket-amount-input");
const emailInput = buyTicket.querySelector("#email");
const form = buyTicket.querySelector("#buy-ticket");
const paymentRadioArr = document.getElementsByName("payment-rad");
const startingPrice = 500;

function getNumber () {
  const numbers = ticketPrice.textContent.split(" ");
  const number = parseInt(numbers[0]);
  return number;
}

addBtn.addEventListener("click", function () {  
  const number = getNumber();  
  const price = number + startingPrice;
  ticketPrice.textContent = price + " Р";   
  amountInput.value++; 
})

subtractButton.addEventListener("click", function () {
  if(amountInput.value < 2) return;
  const number = getNumber();
  const price = number - startingPrice;
  ticketPrice.textContent = price + " Р";  
  amountInput.value--; 
})

closeBtn.addEventListener("click", function() {
  buyTicket.classList.toggle("popup_opened");
})


function submitCard(event) {  
	event.preventDefault();	
  const clientInfo = {};
  clientInfo.email = emailInput.value;
  clientInfo.total = ticketPrice.textContent;
  const radioBtns = [];
  paymentRadioArr.forEach(function (radioBtn) {radioBtns.push(radioBtn);})
  paymentRadioArr.forEach(function(radioBtn) {
    if(radioBtn.checked) {clientInfo.method = radioBtn.value};
  })
  console.log(clientInfo);
}
  amountInput.value = 1;
  form.addEventListener("submit", submitCard);