import uniqid from 'uniqid';
import {
  StyledEducationFormContainer,
  StyledCloseFormSymbol,
  StyledInputWrapper,
} from '../../StyledComponents/Components.styled';
import { Component } from 'react';

export class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        date: '',
        system: '',
        title: '',
        description: '',
        id: uniqid(),
      },
    };
  }
  render() {
    const { hide } = this.props;
    return (
      <StyledEducationFormContainer>
        <StyledCloseFormSymbol
          style={{ color: 'orange', fontSize: '30px' }}
          onClick={hide}
        >
          +
        </StyledCloseFormSymbol>
        <form
          style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            justifyItems: 'space-evenly',
          }}
        >
          <StyledInputWrapper>
            <label>DATE</label>
            <input />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label>DATE</label>
            <input />
          </StyledInputWrapper>
        </form>
      </StyledEducationFormContainer>
    );
  }
}

export default EducationForm;
