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
      isHovered: false,
    };
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
    const { segment, remove } = this.props;
    return this.state.isHovered ? (
      <StyledEducationSegment onMouseLeave={this.stopHovering}>
        <button style={{ position: 'absolute' }}>EDIT</button>
        <button
          style={{ position: 'absolute', right: '0' }}
          id={segment.id}
          onClick={() => remove(segment.id)}
        >
          DELETE
        </button>
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
