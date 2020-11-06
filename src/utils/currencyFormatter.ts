const currencyFormatter = (currency: number): string => {
  return currency.toLocaleString('en-nl', {
    style: 'currency',
    currency: 'EUR',
  });
};

export default currencyFormatter;
