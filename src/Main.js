import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import HornedBeast from './HornedBeast';
import BeastImage from './BeastImage';


class Main extends React.Component {
  render() {
    return (
      <>
     <h2>{this.props.message}</h2>
   <Row sm={2} md={3} lg={4}>
     {this.props.imageURLs.map(beastImg => (
       <Col>
     <BeastImage 
     image={beastImg.image_url}
     title={beastImg.title}
     description={beastImg.description}
     keyword={beastImg.keyword}
     horns={beastImg.horns}
     key={beastImg._id}
     />
     </Col>
     ))}
     

     {/* {imgBeasts}  */}
     </Row>
      
      </>
    )

  }
}

export default Main;
