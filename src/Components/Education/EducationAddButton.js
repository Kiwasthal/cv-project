import { StyledAddSKillButton } from '../../StyledComponents/Components.styled';

import { Component } from 'react';

export class EducationAddButton extends Component {
  render() {
    const { reveal } = this.props;
    return (
      <StyledAddSKillButton style={{ left: '390px' }} onClick={reveal}>
        ADD +
      </StyledAddSKillButton>
    );
  }
}

export default EducationAddButton;
