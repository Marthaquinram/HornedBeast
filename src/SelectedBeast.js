import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import BeastImage from './BeastImage';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title> {this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.description}
            <img src={this.props.src} alt={this.props.title} />{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
