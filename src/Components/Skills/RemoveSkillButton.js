import { StyledRemoveSkillBtn } from '../../StyledComponents/Components.styled';

import React, { Component } from 'react';

export class RemoveSkillButton extends Component {
  render() {
    const { id, remove } = this.props;
    return (
      <StyledRemoveSkillBtn
        onClick={() => {
          remove(id);
        }}
      >
        REMOVE
      </StyledRemoveSkillBtn>
    );
  }
}

export default RemoveSkillButton;
