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

  editSegments(index, newDate, newDegree, newUniversity, newDescription) {
    let segments = [...this.state.educationSegments];
    let segment = { ...segments[index] };
    segment.date = newDate;
    segment.university = newUniversity;
    segment.degree = newDegree;
    segment.description = newDescription;
    segments[index] = segment;
    this.setState({ educationSegments: segments });
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
    const editSegment = this.editSegments.bind(this);

    return this.state.fromDisplaying ? (
      <StyledEducationWrapper onMouseLeave={this.stopHovering}>
        <EducationAddButton reveal={revealForm} />
        <EducationForm hide={hideForm} addSegment={addSegment} />
        <EducationSegmentsDisplayer
          segments={this.state.educationSegments}
          remove={removeSegment}
          editSegment={editSegment}
        />
      </StyledEducationWrapper>
    ) : this.state.hovering ? (
      <StyledEducationWrapper onMouseLeave={this.stopHovering}>
        <EducationSegmentsDisplayer
          segments={this.state.educationSegments}
          remove={removeSegment}
          editSegment={editSegment}
        />
        <EducationAddButton reveal={revealForm} hide={hideForm} />
      </StyledEducationWrapper>
    ) : (
      <StyledEducationWrapper onMouseEnter={this.isHovered}>
        <EducationSegmentsDisplayer
          segments={this.state.educationSegments}
          remove={removeSegment}
          editSegment={editSegment}
        />
      </StyledEducationWrapper>
    );
  }
}

export default EducationManager;
