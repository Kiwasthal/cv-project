import { StyledEducationSegmentsDisplay } from '../../StyledComponents/Components.styled';
import EducationSegmentControl from './EducationSegmentControl';

import React, { Component } from 'react';

export class EducationSegmentsDisplayer extends Component {
  render() {
    const { segments, remove } = this.props;
    return (
      <StyledEducationSegmentsDisplay>
        {segments.map(segment => (
          <EducationSegmentControl
            segment={segment}
            key={segment.id}
            remove={remove}
          />
        ))}
      </StyledEducationSegmentsDisplay>
    );
  }
}

export default EducationSegmentsDisplayer;
