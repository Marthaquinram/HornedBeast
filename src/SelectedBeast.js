import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> {this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Image 
          src={this.props.selectedBeast.image_url} 
          alt={this.props.selectedBeast.description} 
          title={this.props.selectedBeast.title}
          />
          <Modal.Body> {this.props.selectedBeast.description}</Modal.Body>
          <Modal.Body> Number of Horns {this.props.selectedBeast.horns}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
