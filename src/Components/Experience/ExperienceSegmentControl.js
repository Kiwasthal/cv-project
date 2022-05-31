import {
  StyledEducationSegment,
  StyledEducationSegmentMarker,
  StyledEducationHeader,
  StyledEducationSegmentUniversity,
  StyledEducationSegmentDegree,
  StyledEducationSegmentDescription,
  StyledEditSegment,
  StyledRemoveSegment,
} from '../../StyledComponents/Components.styled';
import { Component } from 'react';
import ExperienceForm from './ExperienceForm';

export class ExperienceSegmentControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isEdited: false,
      segmentEdit: true,
    };
  }

  startEditing = () => {
    this.setState({
      isEdited: true,
    });
  };

  stopEditing() {
    this.setState({
      isEdited: false,
    });
  }

  hoverOver = () => {
    this.setState({
      isHovered: true,
    });
  };

  stopHovering = () => {
    this.setState({
      isHovered: false,
    });
  };

  render() {
    const { segment, remove, editSegment, index } = this.props;
    const hideForm = this.stopEditing.bind(this);
    return this.state.isEdited ? (
      <StyledEducationSegment onMouseLeave={this.stopHovering}>
        <ExperienceForm
          reEditing={this.state.segmentEdit}
          values={segment}
          hideForm={hideForm}
          index={index}
          editSegment={editSegment}
        />
        <StyledEducationSegmentMarker />
        <StyledEducationHeader>{segment.date}</StyledEducationHeader>
        <StyledEducationSegmentUniversity>
          {segment.workplace}
        </StyledEducationSegmentUniversity>
        <StyledEducationSegmentDegree>
          {segment.position}
        </StyledEducationSegmentDegree>
        <StyledEducationSegmentDescription>
          {segment.description}
        </StyledEducationSegmentDescription>
      </StyledEducationSegment>
    ) : this.state.isHovered ? (
      <StyledEducationSegment onMouseLeave={this.stopHovering}>
        <StyledEditSegment onClick={this.startEditing}>Edit</StyledEditSegment>
        <StyledRemoveSegment id={segment.id} onClick={() => remove(segment.id)}>
          Remove
        </StyledRemoveSegment>
        <StyledEducationSegmentMarker />
        <StyledEducationHeader>{segment.date}</StyledEducationHeader>
        <StyledEducationSegmentUniversity>
          {segment.workplace}
        </StyledEducationSegmentUniversity>
        <StyledEducationSegmentDegree>
          {segment.position}
        </StyledEducationSegmentDegree>
        <StyledEducationSegmentDescription>
          {segment.description}
        </StyledEducationSegmentDescription>
      </StyledEducationSegment>
    ) : (
      <StyledEducationSegment onMouseEnter={this.hoverOver}>
        <StyledEducationSegmentMarker />
        <StyledEducationHeader>{segment.date}</StyledEducationHeader>
        <StyledEducationSegmentUniversity>
          {segment.workplace}
        </StyledEducationSegmentUniversity>
        <StyledEducationSegmentDegree>
          {segment.position}
        </StyledEducationSegmentDegree>
        <StyledEducationSegmentDescription>
          {segment.description}
        </StyledEducationSegmentDescription>
      </StyledEducationSegment>
    );
  }
}

export default ExperienceSegmentControl;
