import {
  StyledSkillContent,
  StyledSkillHeader,
  StyledSkillBar,
  StyledPercentage,
} from '../../StyledComponents/Components.styled';
import RemoveSkillButton from './RemoveSkillButton';
import { Component } from 'react';

export class SkillContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }
  isHovered() {
    this.setState({
      hovering: true,
    });
  }

  endHover() {
    this.setState({
      hovering: false,
    });
  }

  render() {
    const { skill, remove } = this.props;
    const startHover = this.isHovered.bind(this);
    const endHover = this.endHover.bind(this);
    return this.state.hovering ? (
      <StyledSkillContent onMouseLeave={endHover}>
        <RemoveSkillButton id={skill.skillName} remove={remove} />
        <StyledSkillHeader>{skill.skillName}</StyledSkillHeader>
        <StyledSkillBar>
          <StyledPercentage
            style={{ width: `${skill.percentage}%` }}
          ></StyledPercentage>
        </StyledSkillBar>
      </StyledSkillContent>
    ) : (
      <StyledSkillContent onMouseEnter={startHover}>
        <StyledSkillHeader>{skill.skillName}</StyledSkillHeader>
        <StyledSkillBar>
          <StyledPercentage
            style={{ width: `${skill.percentage}%` }}
          ></StyledPercentage>
        </StyledSkillBar>
      </StyledSkillContent>
    );
  }
}

export default SkillContent;
