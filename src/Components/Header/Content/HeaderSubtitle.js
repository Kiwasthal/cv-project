import { StyledUserSubheader } from '../../../StyledComponents/Components.styled';

import { Component } from 'react';

class HeaderSubtitle extends Component {
  render() {
    const { text } = this.props;
    return <StyledUserSubheader>{text}</StyledUserSubheader>;
  }
}

export default HeaderSubtitle;
