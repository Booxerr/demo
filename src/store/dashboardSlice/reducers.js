exports.setActiveStore = (state, action) => {
    const store = action.payload;
    state.activeStore = store
    state.updatedAt = Date.now();
  };
  