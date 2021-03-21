let initialState = {
  loading: false,
  products: [],
  error: null
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.products
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        products: []
      };

    default:
      return state;
  }
}
 
export const getProducts = state => state.products;
export const getProductsLoading = state => state.loading;
export const getProductsError = state => state.error;