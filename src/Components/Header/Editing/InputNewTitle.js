import { Component } from 'react';
import { StyledTitleInputMain } from '../../../StyledComponents/Components.styled';

export class InputNewTitle extends Component {
  render() {
    const { manageState } = this.props;
    return <StyledTitleInputMain onChange={manageState} />;
  }
}

export default InputNewTitle;
