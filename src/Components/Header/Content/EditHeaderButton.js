import { StyledEditButton } from '../../../StyledComponents/Components.styled';
import { Component } from 'react';

export class EditHeaderButton extends Component {
  render() {
    return (
      <StyledEditButton style={{ gridArea: '2/ 4/ 3 /5' }}>
        Edit
      </StyledEditButton>
    );
  }
}

export default EditHeaderButton;
