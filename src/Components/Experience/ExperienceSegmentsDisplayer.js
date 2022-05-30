import { StyledExperienceSegmentsDisplay } from '../../StyledComponents/Components.styled';
import ExperienceSegmentControl from './ExperienceSegmentControl';

import React, { Component } from 'react';

export class ExperienceSegmentsDisplayer extends Component {
  render() {
    const { segments, remove, editSegment } = this.props;
    return (
      <StyledExperienceSegmentsDisplay>
        {segments.map((segment, index) => (
          <ExperienceSegmentControl
            segment={segment}
            key={segment.id}
            remove={remove}
            editSegment={editSegment}
            index={index}
          />
        ))}
      </StyledExperienceSegmentsDisplay>
    );
  }
}

export default ExperienceSegmentsDisplayer;
