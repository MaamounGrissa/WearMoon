
export function fetchDataRequest() {
    return {
        type: 'FETCH_DATA_REQUEST'
    };
}

export function fetchDataSuccess(products) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        products: products
    };
}

export function fetchDataError(error) {
    return {
        type: 'FETCH_DATA_ERROR',
        error: error 
    };
}
