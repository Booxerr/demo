exports.setStores = (state, action) => {
  const stores = action.payload;
  state.stores = stores;
  state.updatedAt = Date.now();
};
