function getShippingCost(country) {
    
    let cost;
    let message = `Shipping to ${country} will cost ${cost} credits`;
    
switch (country) {
case 'China':
    
    return message;

    break;
case 'Chile':
      return message;
    break;
case 'Australia':
     return message;
    break;
case 'Jamaica':
    return message;
default:
  return "Sorry, there is no delivery to your country";
}
    
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"