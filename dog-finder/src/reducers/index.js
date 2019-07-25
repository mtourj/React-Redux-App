import * as actions from '../actions';

const initialState = {
    fetchingDogs: false,
    fetchingBreeds: false,
    dogsError: '',
    breedsError: '',
    dogs: [],
    breeds: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_DOGS_START : {
            return {
                ...state,
                fetchingDogs: true,
                dogsError: ''
            }
        }
        case actions.FETCH_DOGS_SUCCESS : {
            return {
                ...state,
                fetchingDogs: false,
                dogs: action.payload
            }
        }
        case actions.FETCH_DOGS_FAILURE : {
            return {
                ...state,
                fetchingDogs: false,
                dogsError: action.payload
            }
        }
        case actions.FETCH_BREEDS_START : {
            return {
                ...state,
                fetchingBreeds: true,
                breedsError: ''
            }
        }
        case actions.FETCH_BREEDS_SUCCESS : {
            return {
                ...state,
                fetchingBreeds: false,
                breeds: action.payload
            }
        }
        case actions.FETCH_BREEDS_FAILURE : {
            return {
                ...state,
                fetchingBreeds: false,
                breedsError: action.payload
            }
        }
        default : {
            return state;
        }
    }
}