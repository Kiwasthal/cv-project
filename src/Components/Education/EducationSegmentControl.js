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
import EducationForm from './EducationForm';

import { Component } from 'react';

export class EducationSegmentControl extends Component {
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
        <EducationForm
          reEditing={this.state.segmentEdit}
          values={segment}
          hideForm={hideForm}
          index={index}
          editSegment={editSegment}
        />
        <StyledEducationSegmentMarker />
        <StyledEducationHeader>{segment.date}</StyledEducationHeader>
        <StyledEducationSegmentUniversity>
          {segment.university}
        </StyledEducationSegmentUniversity>
        <StyledEducationSegmentDegree>
          {segment.degree}
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
          {segment.university}
        </StyledEducationSegmentUniversity>
        <StyledEducationSegmentDegree>
          {segment.degree}
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
          {segment.university}
        </StyledEducationSegmentUniversity>
        <StyledEducationSegmentDegree>
          {segment.degree}
        </StyledEducationSegmentDegree>
        <StyledEducationSegmentDescription>
          {segment.description}
        </StyledEducationSegmentDescription>
      </StyledEducationSegment>
    );
  }
}

export default EducationSegmentControl;
