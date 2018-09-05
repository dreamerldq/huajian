const asyncName = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Async lidanqiu' });
  }, 2000);
});
export { asyncName };
