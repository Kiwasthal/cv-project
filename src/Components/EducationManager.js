import { StyledEducationWrapper } from '../StyledComponents/Components.styled';
import EducationAddButton from './Education/EducationAddButton';
import EducationForm from './Education/EducationForm';

import { Component } from 'react';

export class EducationManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      fromDisplaying: false,
    };
  }

  startDisplayingForm = () => {
    this.setState({
      fromDisplaying: true,
    });
  };

  stopDisplayingForm = () => {
    this.setState({
      fromDisplaying: false,
    });
  };

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

  render() {
    const revealForm = this.startDisplayingForm.bind(this);
    const hideForm = this.stopDisplayingForm.bind(this);

    return this.state.fromDisplaying ? (
      <StyledEducationWrapper onMouseLeave={this.stopHovering}>
        <EducationAddButton reveal={revealForm} />
        <EducationForm hide={hideForm} />
      </StyledEducationWrapper>
    ) : this.state.hovering ? (
      <StyledEducationWrapper onMouseLeave={this.stopHovering}>
        {/* <EducationAddButton reveal={revealForm} hide={hideForm} /> */}
      </StyledEducationWrapper>
    ) : (
      <StyledEducationWrapper
        onMouseEnter={this.isHovered}
      ></StyledEducationWrapper>
    );
  }
}

export default EducationManager;
