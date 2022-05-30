import {
  StyledEducationSegment,
  StyledEducationSegmentMarker,
  StyledEducationHeader,
  StyledEducationSegmentUniversity,
  StyledEducationSegmentDegree,
  StyledEducationSegmentDescription,
} from '../../StyledComponents/Components.styled';

import React, { Component } from 'react';

export class EducationSegmentControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }

  render() {
    const { segment } = this.props;
    return (
      <StyledEducationSegment>
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
