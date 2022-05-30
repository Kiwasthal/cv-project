import { Component } from 'react';
import { StyledExperienceWrapper } from '../StyledComponents/Components.styled';
import EducationAddButton from './Education/EducationAddButton';

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
    return this.state.formDisplaying ? (
      <StyledExperienceWrapper>
        <EducationAddButton revealForm={revealForm} />
      </StyledExperienceWrapper>
    ) : (
      <div></div>
    );
  }
}

export default ExperienceManager;
