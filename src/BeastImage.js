import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
// import Card from 'react-bootstrap/esm/Card';
// import Button from 'react-bootstrap/Button';

class BeastImage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      status: "Will you choose me?🥺"
    }
  }

  handleClick = () =>{
    if(this.state.status === "Thats a vote for me 🙋‍♀️!"){
      this.setState({ status:"Will you choose me?🥺"})
    } else{
      this.setState({ status: "Thats a vote for me 🙋‍♀️!"});
    }
  }
  render() {
    return (
      <>
      {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.src} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
      <Container>
       <Image src={this.props.image} alt="The beaties and the horned beast" onClick={this.handleClick} /> 
      <h2>{this.state.status}</h2>
      {/* onClick is the event listener and handleClick is the event handler, the event listener is the thing the attribute name, handler is the function that handles that event.  */}
      </Container>
      
      </>
    )

  }
}

export default BeastImage;
