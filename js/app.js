var list = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

function getList(shoppingList){
    for (var i = 0; i<shoppingList.length; i++){
 //   console.log(shoppingList[i].product);

    var divElem = document.createElement('div');
    divElem.className = 'product';
    divElem.innerHTML = shoppingList[i].product;
    document.body.appendChild(divElem);

    var priceElem = document.createElement ('div');
    priceElem.className = 'price';
    priceElem.innerHTML = '$' + shoppingList[i].price;
    document.body.appendChild(priceElem);

    var pElem = document.createElement('p');
    pElem.className = 'alignleft';
    pElem.innerHTML = divElem;
    console.log(pElem);

    var descElem = document.createElement('div');
    descElem.className = 'description';
    descElem.innerHTML = shoppingList[i].description;
    divElem.appendChild(descElem);
    
    }
}
getList(list)

var parentElem = document.getElementsByClassName('product');

console.log(parentElem);

for (var i = 0; i<parentElem.length; i++){
    parentElem[i].addEventListener("click", showDesc);
}

function showDesc(){
 //   console.log(test);
    var childElem = this.querySelectorAll('.description')[0];
    if(childElem.style.display === 'block'){
        childElem.style.display = 'none';
        childElem.style.color = 'gray';
    }else{
        childElem.style.display = 'block';
        childElem.style.color = 'gray';
    }
}