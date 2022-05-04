import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from './data.json';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    showModal: false,
    selectedBeast: {}
    
    }
  }
  handleCloseModal = () => {
    this.setState({showModal: false});
  };
  handleOpenModal = (beastName) => {
    const selectedBeast = imageURLs.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast});
  };


  render() {
    return (
      <div className="App">
        <Header title="🐐 The Horned Beasts! 🦌" />
        <Main 
        imageURLs={imageURLs}  
        handleOpenModal={this.handleOpenModal} 
        message={"Vote for your favorite horned beast!🗳️"}
        />
        
        <SelectedBeast 
        show={this.state.showModal}
        handleClose={this.handleCloseModal}
        selectedBeast={this.state.selectedBeast}
        description={this.props.description}
        />
         <Footer text={"🫵 Your vote matters! 🫵"} />

      </div>
    );
  }
}

export default App;
