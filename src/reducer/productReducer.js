const ProductReducer = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }
  //   if (action.type === "API_ERROR") {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }
  //   if (action.type === "SET_API_DATA") {
  //     const featuredData = action.payload.filter((curElement) => {
  //       return curElement.featured === true;
  //     });
  //     return {
  //       ...state,
  //       isLoading: false,
  //       products: action.payload,
  //       featureProducts: featuredData,
  //     };
  //   }
  //   return state;
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featuredData = action.payload.filter((curElement) => {
        return curElement.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featuredData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singelProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default ProductReducer;
