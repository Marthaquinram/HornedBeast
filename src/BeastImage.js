import React from "react";
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/Button";
import { BalloonHeartFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import SelectedBeast from "./SelectedBeast";

class BeastImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Will you choose me?🥺",
      clicks: 0,
      showModal: false,
    };
  }

  handleClick = () => {
    // if(this.state.status === "Thats a vote for me 🙋‍♀️!"){
    this.setState({
      clicks: this.state.clicks + 1,
      status: "Thats a vote for me 🙋‍♀️!",
    });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    // console.log('this beastImages.js this.props', this.props);
    return (
      <>
        <Card style={{ width: "18rem" }} className="beast h-100">
          <Container>
            <Card.Title as="h2">{this.props.title} </Card.Title>
            <Card.Img
              onClick={this.handleShowModal}
              src={this.props.image}
              alt={this.props.description}
              title={this.props.title}
            />
            <Card.Body>
              <Card.Text>
                {" "}
                <BalloonHeartFill /> {this.state.clicks}{" "}
              </Card.Text>
              <Card.Text>{this.props.description} </Card.Text>
              <Button
                id="button"
                variant="primary"
                onClick={() => this.handleClick(this.props)}
              >
                {" "}
                {this.state.status}
                {this.setState}
              </Button>
              <SelectedBeast
                showModal={this.state.showModal}
                handleCloseModal={this.handleCloseModal}
                src={this.props.image}
                description={this.props.description}
                title={this.props.title}
              />
            </Card.Body>
          </Container>
        </Card>
      </>
    );
  }
}

export default BeastImage;
