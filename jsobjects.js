"use strict";
let firstitem = {id: 1, name: "laptop", price: 500};
let seconditem = { id: 2, name: "watch", price: 240, brand:"sonica"};
console.log(`firstitem has a name of ${firstitem.name} and a price of ${firstitem.price}`);
console.log(`firstitem has a name of ${seconditem["name"]} and a price of ${seconditem["price"]}`);
console.log(`the brand of firstitem is ${firstitem.brand} of seconditemm is ${seconditem.brand}`);
let USD_EUR = 90;
let thirditem = {id: 3,
                name: "headphones",
                brand:"sonica",
                price: 84,
                priceEUR: function(){return this.price *  USD_EUR;}

};
console.log("price of updated thirditem in euros:",thirditem.priceEUR());
thirditem = {id: 3,
            name: "headphones",
            brand:"sonica",
            price: 84,
            priceEUR(){return this.price * USD_EUR;}     
};
