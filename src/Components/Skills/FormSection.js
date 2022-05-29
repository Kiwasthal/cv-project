import {
  StyledAddSkillFormContainer,
  StyledCloseFormSymbol,
  StyledSkillInput,
} from '../../StyledComponents/Components.styled';

import { Component } from 'react';

export class FormSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: '',
      percentage: '',
    };
  }
  handleSkillChange(e) {
    this.setState({
      skillName: e.target.value,
    });
  }

  handlePercentageChange;

  render() {
    const { closeForm } = this.props;
    return (
      <StyledAddSkillFormContainer>
        <StyledCloseFormSymbol onClick={closeForm}>+</StyledCloseFormSymbol>
        <form noValidate>
          <div
            style={{
              marginTop: '20px',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <label>Skill Name</label>
            <StyledSkillInput
              type="text"
              value={this.state.skillName}
            ></StyledSkillInput>
          </div>
          <div
            style={{
              marginTop: '10px',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <label>Percentage</label>
            <StyledSkillInput />
          </div>
          <button>CREATE</button>
        </form>
      </StyledAddSkillFormContainer>
    );
  }
}

export default FormSection;
