const ProductReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "API_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  if (action.type === "SET_API_DATA") {
    const featuredData = action.payload.filter((curElement) => {
      return curElement.featured === true;
    });
    return {
      ...state,
      isLoading: false,
      products: action.payload,
      featureProducts: featuredData,
    };
  }
  return state;
};
export default ProductReducer;
