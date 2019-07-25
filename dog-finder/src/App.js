import React, { useEffect, useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import DogList from './components/DogList';

import { connect } from 'react-redux';

import { fetchDogs, fetchBreeds } from './actions';

function App(props) {

  const fetchBreeds = () => {
    props.fetchBreeds();
  }

  const fetchDogs = (filter = {}) => {
    props.fetchDogs(filter);
  }

  useEffect(() => {
    //Load the list of breeds and feed to search bar
    fetchBreeds();
    //Load an initial list of dogs to populate the list
    fetchDogs();
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <div className='main-content'>
        <Searchbar />
        <DogList />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { fetchDogs, fetchBreeds })(App);
