exports.setStoreStaff = (state, action) => {
  const storeStaff = action.payload;
  state.storeStaff[storeStaff.store] = storeStaff.data;
  state.updatedAt = Date.now();
};
