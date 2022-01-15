console.log("Йоу");

const buyTicket = document.querySelector(".popup_type_buy-ticket");
const closeBtn = buyTicket.querySelector("#buy-ticket-close-button");
const ticketPrice = buyTicket.querySelector("#buy-ticket-price");
const addBtn = buyTicket.querySelector("#add-button");
const subtractButton = buyTicket.querySelector("#subtract-button");
const amountInput = buyTicket.querySelector("#ticket-amount-input");
const emailInput = buyTicket.querySelector("#email");
const form = buyTicket.querySelector("#buy-ticket");
const paymentRadioArr = document.getElementsByName("payment-rad");



amountInput.value = 0;


//Добавить проверку на 0
//Получить значение радиокнопки

addBtn.addEventListener("click", function () {
  let array = [];
  array = ticketPrice.textContent.split(" ");
  array.pop();
  console.log(array);
  let number = parseInt(array[0]);
  console.log(number);
  let price = number + 500;
  ticketPrice.textContent = price + " Р";
  console.log(price);
  console.log(number);
  amountInput.value++; 
})

subtractButton.addEventListener("click", function () {
  let array = [];
  array = ticketPrice.textContent.split(" ");
  array.pop();
  console.log(array);
  let number = parseInt(array[0]);
  console.log(number);
  let price = number - 500;
  ticketPrice.textContent = price + " Р";
  console.log(price);
  console.log(number);amountInput  
  amountInput.value--; 
})


function submitCard(event) {
  
	event.preventDefault();	
  const clientInfo = {};
  clientInfo.email = emailInput.value;
  clientInfo.price = ticketPrice.textContent;
  //Фильтрация массива
  const checkedArr = paymentRadioArr;
  let result;
  for(let i=0; i<checkedArr.length; i++) {
    if(checkedArr[i].checked) {
      result = checkedArr[i].value;
    }
  }
  clientInfo.method = result;
  console.log(clientInfo);
}

function click () {
  console.log("click");
}

for(let i=0; i<paymentRadioArr.length; i++) {
  paymentRadioArr[i].onchange = testRadio;
}



form.addEventListener("submit", submitCard);

function testRadio () {
  console.log(this.value);
}

