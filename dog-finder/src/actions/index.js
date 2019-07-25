import axios from 'axios';

const GET_RANDOM_DOGS_EP = 'https://dog.ceo/api/breeds/image/random/50';
const GET_SPECIFIC_DOGS_EP = 'https://dog.ceo/api/breed/$BREED/images';
const GET_BREEDS_EP = 'https://dog.ceo/api/breeds/list/all';

export const FETCH_DOGS_START = 'FETCH_DOGS_START';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';
export const FETCH_BREEDS_START = 'FETCH_BREEDS_START';
export const FETCH_BREEDS_SUCCESS = 'FETCH_BREEDS_SUCCESS';
export const FETCH_BREEDS_FAILURE = 'FETCH_BREEDS_FAILURE';

const breedEndpoint = breed => {
    const newEndpoint = GET_SPECIFIC_DOGS_EP;
    newEndpoint.replace('$BREED', breed);
    return newEndpoint;
}

export const fetchDogs = filter => dispatch => {
    dispatch({
        type: FETCH_DOGS_START
    })
    const endpoint = filter.breed ? breedEndpoint(filter.breed) : GET_RANDOM_DOGS_EP;

    axios.get(endpoint)
    .then (res => {
        console.log(res);
        dispatch({
            type: FETCH_DOGS_SUCCESS,
            payload: res.data.message
        })
    })
    .catch (err => {
        console.log(err.response);
        dispatch({
            type: FETCH_DOGS_FAILURE,
            payoad: 'There was an error fetching dogs!'
        })
    })
}

export const fetchBreeds = () => dispatch => {
    dispatch({
        type: FETCH_BREEDS_START
    })
    axios.get(GET_BREEDS_EP)
    .then (res => {
        console.log(res);
        dispatch({
            type: FETCH_BREEDS_SUCCESS,
            payload: res.data.message
        })
    })
    .catch (err => {
        console.log(err.response);
        dispatch({
            type: FETCH_BREEDS_FAILURE,
            payoad: 'There was an error fetching breeds!'
        })
    })
}