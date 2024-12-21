function makeTransaction(quantity, pricePerDroid) {
  const result = `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
  return result;
}
