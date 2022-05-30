import { StyledSkillsContainer } from '../../StyledComponents/Components.styled';

import { Component } from 'react';
import SkillContent from './SkillContent';

export class SkillContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }
  render() {
    const { display, remove } = this.props;
    const displaySkills = display.map(skill => (
      <SkillContent skill={skill} key={skill.skillName} remove={remove} />
    ));
    return (
      <StyledSkillsContainer style={{ position: 'relative' }}>
        {displaySkills}
      </StyledSkillsContainer>
    );
  }
}

export default SkillContainer;
