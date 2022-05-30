import { StyledImageHolder } from '../StyledComponents/Components.styled';

import { Component } from 'react';

export class ImageManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      image: null,
    };
  }
  isHovered = () => {
    this.setState({
      hovering: true,
    });
  };

  stopHovering = () => {
    this.setState({
      hovering: false,
    });
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return this.state.hovering ? (
      <StyledImageHolder
        onMouseLeave={this.stopHovering}
        style={{
          backgroundImage: `url(${this.state.image})`,
          backgroundSize: '100%',
          position: 'relative',
        }}
      >
        <label
          htmlFor="img"
          style={{
            position: 'absolute',
            left: '16%',
            fontWeight: 600,
            boxShadow: '0px 3px 5px black',
            top: '30%',
            cursor: 'pointer',
            backgroundColor: 'orange',
            color: '#fff',
            padding: '10px 5px',
            border: '3px solid black',
          }}
        >
          Upload Image
        </label>
        <input
          id="img"
          type="file"
          onChange={this.onImageChange}
          style={{ display: 'none' }}
        />
      </StyledImageHolder>
    ) : (
      <StyledImageHolder
        onMouseEnter={this.isHovered}
        style={{
          backgroundImage: `url(${this.state.image})`,
          backgroundSize: '100%',
        }}
      ></StyledImageHolder>
    );
  }
}

export default ImageManager;
