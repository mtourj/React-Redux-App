import React from 'react';

import { connect } from 'react-redux';

import './Sidebar.scss';

const Sidebar = props => {
    const breeds = Object.keys(props.breeds);

    const getBreed = breed => {
        // Do a fetchDogs call with breed selected
    }

    return (
        <div className='sidebar'>
            <h2>Browse Breeds</h2>
            {
                props.fetchingBreeds ? <p>Loading...</p> : (
                    props.breedsError ? <p className='fetch-error'>{props.breedsError} <span className='retry'>Try again</span></p>
                : breeds.map(breed => {
                    const display = breed.charAt(0).toUpperCase() + breed.slice(1);
                return <p className='dog-breed' onClick={() => getBreed(breed)} key={breed}>{display}</p>
                })
                )
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {  })(Sidebar);