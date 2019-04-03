import React, { Component } from 'react';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImages from './components/DogBreedImages';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <main>
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          <Route exact path="/" component={DogsListContainer} />
        </main>
      </div>
    );
  }
}

export default App;
