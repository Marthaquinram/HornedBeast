import React from "react";
import { Col, Row } from "react-bootstrap";
// import HornedBeast from './HornedBeast';
import HornedBeast from "./HornedBeast";


class Main extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.message}</h2>
        <Row sm={2} md={3} lg={4}>
          {this.props.imageURLs.map((beastImg) => (
            <Col>
      
              <HornedBeast
                key={beastImg._id}
                title={beastImg.title}
                image={beastImg.image_url}
                description={beastImg.description}
                keyword={beastImg.keyword}
                horns={beastImg.horns}
                handleOpenModal={this.props.handleOpenModal}
              />
            </Col>
          ))}

          {/* {imgBeasts}  */}
        </Row>
      </>
    );
  }
}

export default Main;
