import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import { BalloonHeartFill } from 'react-bootstrap-icons';

class BeastImage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      status: "Will you choose me?🥺",
      clicks: 0
    }
  }

  handleClick = () =>{
    if(this.state.status === "Thats a vote for me 🙋‍♀️!"){
      this.setState({clicks: this.state.clicks + 1})
    } else{
      this.setState({ status: "Thats a vote for me 🙋‍♀️!"});
    }
  }
  
  
  render() {
    // console.log('this beastImages.js this.props', this.props);
    return (
      <>
      <Card style={{ width: '18rem' }} onClick={() => this.handleClick(this.props)} className="beast">
  <Card.Img src={this.props.image} alt={this.props.description} title={this.props.title}  /> 
      
  <Card.Body>
    <Card.Title as="h2">{this.props.title} </Card.Title>
    <Card.Text> <BalloonHeartFill /> {this.state.clicks} </Card.Text>
    <Card.Text>{this.props.description} </Card.Text>
    <Button variant="primary">{this.state.status}{this.setState}</Button>
  </Card.Body>
</Card>
      {/* <Container> */}
       {/* <Image src={this.props.image} alt="The beaties and the horned beast" onClick={this.handleClick} /> 
      <h2>{this.state.status}</h2> */}
      {/* onClick is the event listener and handleClick is the event handler, the event listener is the thing the attribute name, handler is the function that handles that event.  */}
      {/* </Container> */}
      
      </>
    )

  }
}

export default BeastImage;
