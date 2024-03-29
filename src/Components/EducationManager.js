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
      formDisplaying: false,
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

  editSegments(
    index,
    newDate,
    defaultDate,
    newDegree,
    defaultDegree,
    newUniversity,
    defaultUniversity,
    newDescription,
    defaultDescription
  ) {
    let segments = [...this.state.educationSegments];
    let segment = { ...segments[index] };
    newDate === '' ? (segment.date = defaultDate) : (segment.date = newDate);
    newDegree === ''
      ? (segment.degree = defaultDegree)
      : (segment.degree = newDegree);
    newUniversity === ''
      ? (segment.university = defaultUniversity)
      : (segment.university = newUniversity);

    newDescription === ''
      ? (segment.description = defaultDescription)
      : (segment.description = newDescription);
    segments[index] = segment;
    this.setState({ educationSegments: segments });
  }

  startDisplayingForm = () => {
    this.setState({
      formDisplaying: true,
    });
  };

  stopDisplayingForm = () => {
    this.setState({
      formDisplaying: false,
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

    return this.state.formDisplaying ? (
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
