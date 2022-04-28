import React from 'react';
import HornedBeast from './HornedBeast';
import BeastImage from './BeastImage';

class Main extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.message}</h2>
      <BeastImage image={this.props.imageURLs[0].image_url} />
      <BeastImage image={this.props.imageURLs[1].image_url} />
      <BeastImage image={this.props.imageURLs[2].image_url} />
      <BeastImage image={this.props.imageURLs[3].image_url} />
      <BeastImage image={this.props.imageURLs[4].image_url} />
      <BeastImage image={this.props.imageURLs[5].image_url} />
      <BeastImage image={this.props.imageURLs[6].image_url} />
      <BeastImage image={this.props.imageURLs[7].image_url} />
      <BeastImage image={this.props.imageURLs[8].image_url} />
      <BeastImage image={this.props.imageURLs[9].image_url} />
      <BeastImage image={this.props.imageURLs[10].image_url} />
      <BeastImage image={this.props.imageURLs[11].image_url} />
      <BeastImage image={this.props.imageURLs[12].image_url} />
      <BeastImage image={this.props.imageURLs[13].image_url} />
      <BeastImage image={this.props.imageURLs[14].image_url} />
      <BeastImage image={this.props.imageURLs[15].image_url} />
      <BeastImage image={this.props.imageURLs[16].image_url} />
      <BeastImage image={this.props.imageURLs[17].image_url} />
      <BeastImage image={this.props.imageURLs[18].image_url} />
      <BeastImage image={this.props.imageURLs[19].image_url} />

        <HornedBeast title={'Goat'} description={'Goat with large horns'} src={'https://www.maxpixel.net/static/photo/1x/Animal-World-Animal-Horns-Capricorn-Zoo-Hellabrunn-2321779.jpg'}/>
        <HornedBeast title={'Mountain Goat'} description={'Large Mountain Goat with Horns'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxo3NxYkvpVy8CQmgKlXht-FLVFW-hCVfMw&usqp=CAU'}/>
        <HornedBeast title={'Elasmotherium Beast'} description={'Elasmotherium Beast with Horns'} src={'https://upload.wikimedia.org/wikipedia/commons/4/47/Elasm062.jpg'}/>


      </>
    )

  }
}

export default Main;
