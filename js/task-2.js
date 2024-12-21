function getShippingMessage(country, price, deliveryFee) {
  const result = `Shipping to ${country} will cost ${
    price + deliveryFee
  } credits`;
  return result;
}
