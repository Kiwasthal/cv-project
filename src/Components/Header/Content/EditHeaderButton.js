import { StyledEditButton } from '../../../StyledComponents/Components.styled';
import { Component } from 'react';

export class EditHeaderButton extends Component {
  render() {
    const { confirmEdit, textContent, finalizeEdit } = this.props;
    return (
      <StyledEditButton
        style={{ gridArea: '2/ 4/ 3 /5' }}
        onClick={() => {
          confirmEdit();
          finalizeEdit();
        }}
      >
        {textContent}
      </StyledEditButton>
    );
  }
}

export default EditHeaderButton;
