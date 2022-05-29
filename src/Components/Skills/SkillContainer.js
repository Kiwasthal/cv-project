import { StyledSkillsContainer } from '../../StyledComponents/Components.styled';

import { Component } from 'react';

export class SkillContainer extends Component {
  render() {
    const { skills } = this.props;

    return <StyledSkillsContainer></StyledSkillsContainer>;
  }
}

export default SkillContainer;
