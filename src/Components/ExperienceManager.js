import { Component } from 'react';
import { StyledExperienceWrapper } from '../StyledComponents/Components.styled';
import EducationAddButton from './Education/EducationAddButton';
import ExperienceForm from './Experience/ExperienceForm';
import ExperienceSegmentsDisplayer from './Experience/ExperienceSegmentsDisplayer';

export class ExperienceManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      formDisplaying: false,
      experienceSegments: [],
    };
  }

  addExperienceSegment(segment) {
    this.setState(prevState => ({
      experienceSegments: [...prevState.experienceSegments, segment],
    }));
  }

  removeExperienceSegment(removeData) {
    this.setState({
      experienceSegments: this.state.experienceSegments.filter(
        segment => segment.id !== removeData
      ),
    });
  }

  editSegments(
    index,
    newDate,
    defaultDate,
    newWorkplace,
    defaultWorkplace,
    newPosition,
    defaultPosition,
    newDescription,
    defaultDescription
  ) {
    let segments = [...this.state.experienceSegments];
    let segment = { ...segments[index] };
    newDate === '' ? (segment.date = defaultDate) : (segment.date = newDate);
    newWorkplace === ''
      ? (segment.workplace = defaultWorkplace)
      : (segment.workplace = newWorkplace);
    newPosition === ''
      ? (segment.position = defaultPosition)
      : (segment.position = newPosition);

    newDescription === ''
      ? (segment.description = defaultDescription)
      : (segment.description = newDescription);
    segments[index] = segment;
    this.setState({ experienceSegments: segments });
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
    const addSegment = this.addExperienceSegment.bind(this);
    const removeSegment = this.removeExperienceSegment.bind(this);
    const editSegment = this.editSegments.bind(this);
    return this.state.formDisplaying ? (
      <StyledExperienceWrapper>
        <EducationAddButton revealForm={revealForm} />
        <ExperienceForm hide={hideForm} addSegment={addSegment} />
        <ExperienceSegmentsDisplayer
          segments={this.state.experienceSegments}
          remove={removeSegment}
          editSegment={editSegment}
        />
      </StyledExperienceWrapper>
    ) : this.state.hovering ? (
      <StyledExperienceWrapper onMouseLeave={this.stopHovering}>
        <ExperienceSegmentsDisplayer
          segments={this.state.experienceSegments}
          remove={removeSegment}
          editSegment={editSegment}
        />
        <EducationAddButton reveal={revealForm} hide={hideForm} />
      </StyledExperienceWrapper>
    ) : (
      <StyledExperienceWrapper onMouseEnter={this.isHovered}>
        <ExperienceSegmentsDisplayer
          segments={this.state.experienceSegments}
          remove={removeSegment}
          editSegment={editSegment}
        />
      </StyledExperienceWrapper>
    );
  }
}

export default ExperienceManager;
