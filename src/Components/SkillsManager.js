import {
  StyledSkillsWrapper,
  StyledAddSKillButton,
} from '../StyledComponents/Components.styled';
import FormSection from './Skills/FormSection';
import SkillContainer from './Skills/SkillContainer';

import { Component } from 'react';

export class SkillsManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      formDisplaying: false,
      skills: [],
    };
  }

  HoverOver() {
    this.setState({
      hovered: true,
    });
  }

  StopHovering() {
    this.setState({
      hovered: false,
    });
  }

  displayForm() {
    this.setState({
      formDisplaying: true,
    });
  }

  closeForm() {
    this.setState({
      formDisplaying: false,
    });
  }

  addSkill(skill) {
    this.setState(prevState => ({
      skills: [...prevState.skills, skill],
    }));
  }

  removeSkill(target) {
    this.setState({
      skills: this.state.skills.filter(skill => skill.skillName !== target),
    });
  }

  render() {
    const startHover = this.HoverOver.bind(this);
    const stopHover = this.StopHovering.bind(this);
    const formDisplay = this.displayForm.bind(this);
    const closeForm = this.closeForm.bind(this);
    const addSkill = this.addSkill.bind(this);
    const removeSkill = this.removeSkill.bind(this);

    return this.state.formDisplaying ? (
      <StyledSkillsWrapper onMouseLeave={stopHover}>
        <SkillContainer
          display={this.state.skills}
          remove={removeSkill}
        ></SkillContainer>
        <StyledAddSKillButton onClick={formDisplay}>
          ADD +{' '}
        </StyledAddSKillButton>
        <FormSection closeForm={closeForm} addSkill={addSkill} />
      </StyledSkillsWrapper>
    ) : this.state.hovered ? (
      <StyledSkillsWrapper onMouseLeave={stopHover}>
        <SkillContainer display={this.state.skills} remove={removeSkill} />
        <StyledAddSKillButton onClick={formDisplay}>ADD +</StyledAddSKillButton>
      </StyledSkillsWrapper>
    ) : (
      <StyledSkillsWrapper onMouseEnter={startHover}>
        <SkillContainer display={this.state.skills} remove={removeSkill} />
      </StyledSkillsWrapper>
    );
  }
}

export default SkillsManager;
