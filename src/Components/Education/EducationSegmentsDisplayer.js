import { StyledEducationSegmentsDisplay } from '../../StyledComponents/Components.styled';
import EducationSegmentControl from './EducationSegmentControl';

import React, { Component } from 'react';

export class EducationSegmentsDisplayer extends Component {
  render() {
    const { segments } = this.props;
    return (
      <StyledEducationSegmentsDisplay>
        {segments.map(segment => (
          <EducationSegmentControl segment={segment} />
        ))}
      </StyledEducationSegmentsDisplay>
    );
  }
}

export default EducationSegmentsDisplayer;
