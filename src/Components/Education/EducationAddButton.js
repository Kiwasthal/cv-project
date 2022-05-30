import { StyledAddSKillButton } from '../../StyledComponents/Components.styled';

import { Component } from 'react';

export class EducationAddButton extends Component {
  render() {
    const { reveal } = this.props;
    return (
      <StyledAddSKillButton style={{ left: '190px' }} onClick={reveal}>
        ADD +
      </StyledAddSKillButton>
    );
  }
}

export default EducationAddButton;
