import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../mens.png';
import { Link } from 'react-router-dom'
class FirstSlider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <Link to='details'>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
            height='300'
          /></Link>
          <Carousel.Caption>
            <h3>Men's Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="Second slide"
            height='300'
          />

          <Carousel.Caption>
            <h3>Women's Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="Third slide"
            height='300'
          />

          <Carousel.Caption>
            <h3>Kids Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default FirstSlider;