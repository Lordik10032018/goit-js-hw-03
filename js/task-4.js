'use strict'

function getShippingCost(country) {
    let res;
    switch (country) {
        case "China":
            res = "Shipping to China will cost 100 credits";
            break;
        case "Australia":
            res = "Shipping to Australia will cost 170 credits";
            break;
        case "Chile":
            res = "Shipping to Chile will cost 250 credits";
            break;
        case "Jamaica":
            res = "Shipping to Jamaica will cost 120 credits";
            break;
        default:
            res = "Sorry, there is no delivery to your country";
    }
    return res;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"