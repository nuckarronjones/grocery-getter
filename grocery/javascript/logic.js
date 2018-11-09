let list = document.getElementById("list-group");
let displayTotal = document.getElementById("overall");
let bankDisplay = document.getElementById("bankDisplay");
let purchase = document.getElementById("buy");
let clear = document.getElementById("clear");



const CHEESE ={
	price: 3.20
}
const MILK ={
	price: 4.50
}
const WINE = {
	price: 50.00
}
const CHIPS ={
	price:2.20
}

document.getElementById("cheese").addEventListener("click",add);
document.getElementById("milk").addEventListener("click",add);
document.getElementById("wine").addEventListener("click",add);
document.getElementById("chips").addEventListener("click",add);

list.addEventListener("click",erase);

purchase.addEventListener("click",buy);

clear.addEventListener("click",clr);

let itemCount = 0;
let bankAccount = 100.00;
let total =0;



function clearout(){
	bankDisplay.innerText = "$ " + bankAccount.toFixed(2);
		list.innerHTML = " ";
		itemCount = 0;
		total = 0;
		displayTotal.innerText = "$0.00";
};




function buy(e){
	e.preventDefault();

	if(total <= bankAccount){
		bankAccount -= total;
		clearout();
		console.log(itemCount + " itemcount");
		console.log(total + " total");
	}
	else{
		alert("You do not have enough money.")
	}
};

function clr(e){
	e.preventDefault();
	clearout();
};

function add(e){
	e.preventDefault();

	

	if(itemCount < 10)
	{

		//creation of item name and appending to li!
		let newItem = document.createElement("li");
		let node = e.target.className;
		let itemName = document.createTextNode(node);

		newItem.appendChild(itemName);

		//defining class name
		let classname = itemName;
		newItem.className = e.target.className;

		//appending new item to list
		list.appendChild(newItem);

		//append END delete/PRICE button to list item
		//creation of div
		let div = document.createElement("div");
		div.id = "end";

		//delete button/ADDED TO DIV
		let delBTN = document.createElement("button");
		delBTN.className = "Delete";
		delBTN.innerText = "X";
		newItem.appendChild(delBTN);

		div.appendChild(delBTN);


				
			{//Location of price by comparison
				let priceName = e.target.id;

				let price;

				(function priceDisplay(x){
					if(x == "milk"){
					 return price = MILK.price;
						}else if(x == "cheese"){
					 return price = CHEESE.price;
						}else if(x == "wine"){
					 return price = WINE.price;
						}else if(x == "chips"){
					 return price = CHIPS.price;
						}
				})(priceName);

				//create span
				let span = document.createElement("span");
				span.className = "span";
				//append soan
				div.appendChild(span);
				span.innerText = price.toFixed(2);
				
				let x = total += price;
				

					function totalDisplay(num){
						displayTotal.innerText = "$ " + Math.abs(num).toFixed(2);
					};
					totalDisplay(x);
			}
				//append div and all contents to li
				newItem.appendChild(div);

				//must be below 10
				itemCount += 1;
	}

	else{
		alert("This is the express lane: Only 10 items are permitted!")
	}
};

function erase(e){

	if (e.target.classList.contains("Delete")){
			let div = e.target.parentElement;
			let li = div.parentElement;
			list.removeChild(li);

		}if(e.target.parentElement.parentElement.className == "Milk"){
			total -= MILK.price;
			
			displayTotal.innerText ="$ " + Math.abs(total).toFixed(2);
		}else if(e.target.parentElement.parentElement.className == "Cheese"){
			total -= CHEESE.price;
			
			displayTotal.innerText ="$ " + Math.abs(total).toFixed(2);
		}else if(e.target.parentElement.parentElement.className == "Wine"){
			total -= WINE.price;
			
			displayTotal.innerText ="$ " + Math.abs(total).toFixed(2);
		}else if(e.target.parentElement.parentElement.className == "Chips"){
			total -= CHIPS.price;
			
			displayTotal.innerText ="$ " + Math.abs(total).toFixed(2);
		}
	itemCount -= 1;
};
