import { StyledUserHeader } from '../../../StyledComponents/Components.styled';
import { Component } from 'react';

export class HeaderTitle extends Component {
  render() {
    const { text } = this.props;
    return <StyledUserHeader>{text}</StyledUserHeader>;
  }
}

export default HeaderTitle;
