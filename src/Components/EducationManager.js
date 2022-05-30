import { StyledEducationWrapper } from '../StyledComponents/Components.styled';
import EducationAddButton from './Education/EducationAddButton';
import EducationForm from './Education/EducationForm';
import EducationSegmentsDisplayer from './Education/EducationSegmentsDisplayer';

import { Component } from 'react';

export class EducationManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      fromDisplaying: false,
      educationSegments: [],
    };
  }

  addEducationSegment(segment) {
    this.setState(prevState => ({
      educationSegments: [...prevState.educationSegments, segment],
    }));
  }

  removeEducationSegment(removeData) {
    this.setState({
      educationSegments: this.state.educationSegments.filter(
        segment => segment.id !== removeData
      ),
    });
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
    const addSegment = this.addEducationSegment.bind(this);
    const removeSegment = this.removeEducationSegment.bind(this);

    return this.state.fromDisplaying ? (
      <StyledEducationWrapper onMouseLeave={this.stopHovering}>
        <EducationAddButton reveal={revealForm} />
        <EducationForm hide={hideForm} addSegment={addSegment} />
        <EducationSegmentsDisplayer
          segments={this.state.educationSegments}
          remove={removeSegment}
        />
      </StyledEducationWrapper>
    ) : this.state.hovering ? (
      <StyledEducationWrapper onMouseLeave={this.stopHovering}>
        <EducationSegmentsDisplayer
          segments={this.state.educationSegments}
          remove={removeSegment}
        />
        <EducationAddButton reveal={revealForm} hide={hideForm} />
      </StyledEducationWrapper>
    ) : (
      <StyledEducationWrapper onMouseEnter={this.isHovered}>
        <EducationSegmentsDisplayer
          segments={this.state.educationSegments}
          remove={removeSegment}
        />
      </StyledEducationWrapper>
    );
  }
}

export default EducationManager;
