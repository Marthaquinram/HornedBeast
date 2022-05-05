import React from "react";
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/Button";
import { BalloonHeartFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
// import SelectedBeast from "./SelectedBeast";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Will you choose me?🥺",
      clicks: 0
    };
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1, status: "Thats a vote for me 🙋‍♀️!"});
    // this.props.handleOpenModal();
  };


  // handleCloseModal = () => {
  //   this.setState({ showModal: false });
  // };
  // handleShowModal = () => {
  //   this.setState({ showModal: true });
  // };

  render() {
  
    return (
      <>
        <Card style={{ width: "18rem" }} className="beast h-100">
          <Container>
            <Card.Title as="h2">{this.props.title} </Card.Title>
            <Card.Img
              // onClick={this.props.handleOpenModal}
              src={this.props.image}
              alt={this.props.description}
              title={this.props.title}
            />
            <Card.Body>
              <Card.Text> 
                <BalloonHeartFill /> {this.state.clicks}{" "}
              </Card.Text>
              <Card.Text>{this.props.description} </Card.Text>
              <Button id="button" variant="primary" onClick={this.handleClick}>
               {this.state.status}
                {/* {this.setState} */}
              </Button>
              <Button id='details' onClick={() => this.props.handleOpenModal(this.props.title)}> Click for details! 🦄  </Button>
            </Card.Body>
          </Container>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
