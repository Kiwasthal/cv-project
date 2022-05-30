import { StyledEducationSegmentsDisplay } from '../../StyledComponents/Components.styled';
import EducationSegmentControl from './EducationSegmentControl';

import React, { Component } from 'react';

export class EducationSegmentsDisplayer extends Component {
  render() {
    const { segments, remove, editSegment } = this.props;
    return (
      <StyledEducationSegmentsDisplay>
        {segments.map((segment, index) => (
          <EducationSegmentControl
            segment={segment}
            key={segment.id}
            remove={remove}
            editSegment={editSegment}
            index={index}
          />
        ))}
      </StyledEducationSegmentsDisplay>
    );
  }
}

export default EducationSegmentsDisplayer;
