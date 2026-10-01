

//الفاكشن الخاصة اضافة الطلبات 
let order =[];

function addToOrder(name,price) {

let existingItem = order.find(function(item){
return item.name === name;
});

if (existingItem){
    existingItem.quantity++;
} else {
      order.push({
name:name,
price:price,
quantity:1
    });
}
displayOrder();
}


//الفاكشن الخاصة بعرض الاوردر
function displayOrder () {

let orderList = document.getElementById("order-list");

orderList.innerHTML = "";
let total = 0;

order.forEach (function(item,index){

orderList.innerHTML += 

`<p>${item.name} 
<button onclick="decreaseQuantity(${index})">-</button>
 ${item.quantity} 
 <button onclick="increaseQuantity(${index})">+</button>
 - ${item.price*item.quantity} SAR
<button onclick="removeFromeOrder(${index})">Remove</button>
</p>`;
 
total += item.price*item.quantity;

});

document.getElementById("total").innerHTML = `Total: ${total} SAR`;

}



function placeOrder () {

if(order.length === 0) {

alert ("Your order is empty!");
return;

}

alert("Your order has been placed!");

order=[];
displayOrder();

}

function removeFromeOrder(index){

    order.splice(index,1);
    displayOrder();
}

function increaseQuantity (index){
order[index].quantity++;
displayOrder();
}

function decreaseQuantity(index){
    if(order[index].quantity > 1){
        order[index].quantity--;
    }

    displayOrder();
}



//اريي المنيو 

let coffees = [
    { name: "Espresso", price: 10, category: "Hot" },
    { name: "Latte", price: 15, category: "Hot" },
    { name: "Cappuccino", price: 14, category: "Hot" },
    { name: "Americano", price: 20, category: "Hot" },
    { name: "Iced Latte", price: 17, category: "Cold" },
    { name: "Iced Americano", price: 22, category: "Cold" }
];



//الفاكشن الخاصة بمربع البحث
let searchInput = document.getElementById("search");


searchInput.addEventListener("input", function() {

let searchText=searchInput.value.toLowerCase();
let filteredCoffees = coffees.filter(function(coffee){

return coffee.name.toLowerCase().includes(searchText) || coffee.category.toLowerCase().includes(searchText);

});
displayCoffees(filteredCoffees);
});



//خاص بعرض المنيو  
function displayCoffees (coffeesToDisplay){

    let menuContainer = document.getElementById("menu-container");

        menuContainer.innerHTML ="";

coffeesToDisplay.forEach(function(coffee){

menuContainer.innerHTML +=

           `<article class="coffee-card">

                <h3>${coffee.name}</h3>
                <p>${coffee.price} SAR</p>
                <button onclick="addToOrder('${coffee.name}', ${coffee.price})"> Add to Order</button>

            </article>`

});

}

displayCoffees(coffees);