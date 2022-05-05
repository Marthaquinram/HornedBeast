import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    showModal: false,
    selectedBeast: {},
    // horns: numHorns
    filterList: [],
    
    }
  }
componentDidMount() {
  this.setState({
    filterList: imageURLs
  });
}

  handleCloseModal = () => {
    this.setState({showModal: false});
  };
  handleOpenModal = (beastName) => {
    const selectedBeast = imageURLs.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast});
  };
handleChange = (e) =>{
  e.preventDefault();
  if(e.target.value === "default"){
    this.setState({filterList: imageURLs})
  } else{
  const list = imageURLs.filter(value => value.horns === parseInt(e.target.value));
  this.setState({filterList: list});
}
}

  render() {
    return (
      <div className="App">
        <Header title="🐐 The Horned Beasts! 🦌"  />
        <Header title="Vote for your favorite horned beast!🗳️"  />
          <Form >
            
              <Form.Control id="drop" onChange={this.handleChange} as="select">
            <option value="default">All Horns</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'100'}>100</option>
          </Form.Control>
          </Form>
        <Main 
        imageURLs={this.state.filterList}  
        handleOpenModal={this.handleOpenModal} 
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
