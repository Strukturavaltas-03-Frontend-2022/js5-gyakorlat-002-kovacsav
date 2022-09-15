const validateVisaCardNumber = (cardNumber = "") => {
  const cardNumberPattern = /^4(\d{12})?(\d{15})?$/;
  return cardNumberPattern.test(cardNumber);
};

export default validateVisaCardNumber;
