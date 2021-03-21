import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./Action";

export function FetchData() {

    const url = 'https://api.mocki.io/v1/af37df01';
    return dispatch => {
        dispatch(fetchDataRequest());
        axios.get(url)
        .then(response => {
            // console.log(response);
            dispatch(fetchDataSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchDataError(error));
        });
    };
}