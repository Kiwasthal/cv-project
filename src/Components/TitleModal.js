import { StyledTitleModal } from '../StyledComponents/Components.styled';
import { Component } from 'react';
import HeaderSubtitle from './Header/Content/HeaderSubtitle';
import HeaderTitle from './Header/Content/HeaderTitle';
import EditHeaderButton from './Header/Content/EditHeaderButton';

class TitleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainHandler: {
        mainInput: '',
        sampleText: 'Panos Koulis',
      },
      secondaryHandler: {
        secondaryInput: '',
        sampleText: 'Learning React',
      },
      hovering: false,
      editing: true,
    };
  }

  revealEditButton() {
    this.setState({
      hovering: true,
    });
  }

  hideEditButton() {
    this.setState({
      hovering: false,
    });
  }

  render() {
    let startEditing = this.revealEditButton.bind(this);
    let stopEditing = this.hideEditButton.bind(this);
    return this.state.hovering ? (
      <StyledTitleModal onMouseLeave={stopEditing}>
        <HeaderTitle text={this.state.mainHandler.sampleText} />
        <HeaderSubtitle text={this.state.secondaryHandler.sampleText} />
        <EditHeaderButton />
      </StyledTitleModal>
    ) : (
      <StyledTitleModal onMouseEnter={startEditing}>
        <HeaderTitle text={this.state.mainHandler.sampleText} />
        <HeaderSubtitle text={this.state.secondaryHandler.sampleText} />
      </StyledTitleModal>
    );
  }
}

export default TitleModal;
