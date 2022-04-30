import React from 'react';
// import HornedBeast from './HornedBeast';
import BeastImage from './BeastImage';

class Main extends React.Component {
  render() {
    // console.log('from main.js this.props', this.props)
    let imgBeasts = this.props.imageURLs.map(beastImg => {
     return <BeastImage image={beastImg.image_url}
     title={beastImg.title}
     description={beastImg.description}
     keyword={beastImg.keyword}
     horns={beastImg.horns}
     key={beastImg._id}
     />
      
    })
    return (
      <>
      <h2>{this.props.message}</h2>

      {imgBeasts}



      </>
    )

  }
}

export default Main;
