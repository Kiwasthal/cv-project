import {
  StyledEducationModal,
  StyledEducationTitle,
} from '../../StyledComponents/Components.styled';
import { Component } from 'react';

class ExperienceHeaderModal extends Component {
  render() {
    return (
      <StyledEducationModal style={{ gridArea: '11/1/12/6' }}>
        <StyledEducationTitle>EXPERIENCE</StyledEducationTitle>
      </StyledEducationModal>
    );
  }
}

export default ExperienceHeaderModal;
