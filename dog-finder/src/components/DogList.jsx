import React from 'react';

import { connect } from 'react-redux';

import './DogList.scss';

const DogList = props => {
    return (
        <div className='dog-list'>
            {
                props.fetchingDogs ? <p>Fetching puppers...</p> : ( props.dogsError ?
                    <p className='fetch-error'>{props.dogsError} <span className='retry'>Try again</span></p>
                    : props.dogs.map (dog => <div className='dog'><img key={dog} src={dog} /></div>)
                )
            }
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {})(DogList);