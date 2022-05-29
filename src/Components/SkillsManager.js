import {
  StyledSkillsWrapper,
  StyledSkillsContainer,
  StyledAddSKillButton,
} from '../StyledComponents/Components.styled';
import FormSection from './Skills/FormSection';

import { Component } from 'react';

export class SkillsManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      formDisplaying: false,
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

  render() {
    const startHover = this.HoverOver.bind(this);
    const stopHover = this.StopHovering.bind(this);
    const formDisplay = this.displayForm.bind(this);
    const closeForm = this.closeForm.bind(this);

    return this.state.formDisplaying ? (
      <StyledSkillsWrapper onMouseLeave={stopHover}>
        <StyledSkillsContainer />
        <StyledAddSKillButton onClick={formDisplay}>
          ADD +{' '}
        </StyledAddSKillButton>
        <FormSection closeForm={closeForm} />
      </StyledSkillsWrapper>
    ) : this.state.hovered ? (
      <StyledSkillsWrapper onMouseLeave={stopHover}>
        <StyledSkillsContainer />
        <StyledAddSKillButton onClick={formDisplay}>ADD +</StyledAddSKillButton>
      </StyledSkillsWrapper>
    ) : (
      <StyledSkillsWrapper onMouseEnter={startHover}>
        <StyledSkillsContainer />
      </StyledSkillsWrapper>
    );
  }
}

export default SkillsManager;
