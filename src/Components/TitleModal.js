import { StyledTitleModal } from '../StyledComponents/Components.styled';
import { Component } from 'react';
import HeaderSubtitle from './Header/Content/HeaderSubtitle';
import HeaderTitle from './Header/Content/HeaderTitle';
import EditHeaderButton from './Header/Content/EditHeaderButton';
import InputNewTitle from './Header/Editing/InputNewTitle';
import InputNewTitleSecondary from './Header/Editing/InputNewTitleSecondary';

class TitleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingText: 'Edit',
      confirmEdit: 'Confirm',
      mainHandler: {
        mainInput: '',
        sampleText: 'Panos Koulis',
      },
      secondaryHandler: {
        secondaryInput: '',
        sampleText: 'Learning React',
      },
      hovering: false,
      editing: false,
    };
  }

  editingTitleInput(e) {
    this.setState({
      mainHandler: {
        mainInput: e.target.value,
      },
    });
  }

  editingSecondaryInput(e) {
    this.setState({
      secondaryHandler: {
        secondaryInput: e.target.value,
      },
    });
  }

  confirmEdit() {
    this.setState({
      editing: false,
    });
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

  startEditing() {
    this.setState({
      editing: true,
    });
  }

  manageConfirmation() {
    this.setState({
      mainHandler: {
        sampleText: this.state.mainHandler.mainInput,
      },
      secondaryHandler: {
        sampleText: this.state.secondaryHandler.secondaryInput,
      },
    });
  }

  render() {
    let revealEditing = this.revealEditButton.bind(this);
    let hideEditing = this.hideEditButton.bind(this);
    let startEditing = this.startEditing.bind(this);
    let confirmEdit = this.confirmEdit.bind(this);
    let editTitle = this.editingTitleInput.bind(this);
    let editSecondaryTitle = this.editingSecondaryInput.bind(this);
    let manageConfirm = this.manageConfirmation.bind(this);

    return this.state.editing ? (
      <StyledTitleModal onMouseLeave={hideEditing}>
        <InputNewTitle manageState={editTitle} />
        <InputNewTitleSecondary manageState={editSecondaryTitle} />
        <EditHeaderButton
          textContent={this.state.confirmEdit}
          confirmEdit={confirmEdit}
          finalizeEdit={manageConfirm}
        />
      </StyledTitleModal>
    ) : this.state.hovering ? (
      <StyledTitleModal onMouseLeave={hideEditing}>
        <HeaderTitle text={this.state.mainHandler.sampleText} />
        <HeaderSubtitle text={this.state.secondaryHandler.sampleText} />
        <EditHeaderButton
          confirmEdit={startEditing}
          textContent={this.state.editingText}
        />
      </StyledTitleModal>
    ) : (
      <StyledTitleModal onMouseEnter={revealEditing}>
        <HeaderTitle text={this.state.mainHandler.sampleText} />
        <HeaderSubtitle text={this.state.secondaryHandler.sampleText} />
      </StyledTitleModal>
    );
  }
}

export default TitleModal;
