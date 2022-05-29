import {
  StyledAddSkillFormContainer,
  StyledCloseFormSymbol,
  StyledSkillInput,
  StyledCreateSkill,
} from '../../StyledComponents/Components.styled';

import { Component } from 'react';

export class FormSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        skillName: '',
        percentage: '',
      },
    };
  }

  handleSkillChange = e =>
    this.setState({
      skill: {
        skillName: e.target.value,
        percentage: this.state.skill.percentage,
      },
    });

  handlePercentageChange = e => {
    if (parseInt(e.target.value) > 100)
      this.setState({
        skill: {
          skillName: this.state.skill.skillName,
          percentage: '100',
        },
      });
    else
      this.setState({
        skill: {
          skillName: this.state.skill.skillName,
          percentage: e.target.value,
        },
      });
  };

  resetForm() {
    this.setState({
      skill: {
        skillName: '',
        percentage: '',
      },
    });
  }

  render() {
    const { closeForm, addSkill } = this.props;

    const resetForm = this.resetForm.bind(this);

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
              value={this.state.skill.skillName}
              onChange={this.handleSkillChange}
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
            <StyledSkillInput
              type="number"
              min="1"
              max="100"
              value={this.state.skill.percentage}
              onChange={this.handlePercentageChange}
            ></StyledSkillInput>
          </div>
          <StyledCreateSkill
            formnovalidate
            onClick={e => {
              e.preventDefault();
              addSkill(this.state.skill);
              closeForm();
              resetForm();
            }}
          >
            Create
          </StyledCreateSkill>
        </form>
      </StyledAddSkillFormContainer>
    );
  }
}

export default FormSection;
