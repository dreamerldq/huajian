export default {
  namespace: 'hello',
  state: {
    name: 'lidanqiu',
  },
  reducers: {
    add(count) { return count + 1; },
    minus(count) { return count - 1; },
  },
};
