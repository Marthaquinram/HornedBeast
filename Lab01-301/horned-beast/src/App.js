import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from './data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="The Horned Beast!" />
        <Main imageURLs={imageURLs} message={"Click for your favorite horned beast!"}/>
         <Footer text={"Your vote matters!"} />

      </div>
    );
  }
}

export default App;
