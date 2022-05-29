import { StyledContactEditButton } from '../../StyledComponents/Components.styled';
import { Component } from 'react';

export class ContactEditButton extends Component {
  render() {
    const {
      text,
      handleEdit,
      handleConfirm,
      startEdit,
      endEdit,
      confirmValues,
      argument,
    } = this.props;
    return text === 'EDIT' ? (
      <StyledContactEditButton
        onClick={() => {
          handleEdit();
          startEdit();
        }}
      >
        {text}
      </StyledContactEditButton>
    ) : (
      <StyledContactEditButton
        onClick={() => {
          handleConfirm();
          endEdit();
          confirmValues();
        }}
        style={{ fontSize: '12px' }}
      >
        {text}
      </StyledContactEditButton>
    );
  }
}

export default ContactEditButton;
