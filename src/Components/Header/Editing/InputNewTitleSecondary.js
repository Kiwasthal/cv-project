import { Component } from 'react';
import { StyledTitleInputSecondary } from '../../../StyledComponents/Components.styled';

export class InputNewTitleSecondary extends Component {
  render() {
    const { manageState } = this.props;
    return <StyledTitleInputSecondary onChange={manageState} />;
  }
}

export default InputNewTitleSecondary;
