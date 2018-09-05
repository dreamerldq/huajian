const asyncInvoice = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      invoice_type: '普通',
      invoice_money: 200,
      principal: 'llp',
    });
  }, 200);
});
export { asyncInvoice };
