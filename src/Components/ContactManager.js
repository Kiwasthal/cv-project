import { StyledContactContainer } from '../StyledComponents/Components.styled';
import AddressContainer from './Contact/AddressContainer';
import WebContainer from './Contact/WebContainer';
import PhoneContainer from './Contact/PhoneContainer';

import { Component } from 'react';

export class ContactManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressHovering: false,
      addressEditing: false,
      addressMain: {
        mainInput: '',
        templateText: '123 Street Athens',
      },
      addressSecondary: {
        secondaryInput: '',
        templateTextCity: 'Greece',
      },
      webHovering: false,
      webEditing: false,
      web: {
        mainInput: '',
        secondaryInput: '',
        templateText: 'contact@gmail.com',
        templateTextSecondary: 'www.contactMe.com',
      },
      phoneHovering: false,
      phoneEditing: false,
      phone: {
        mainInput: '',
        secondaryInput: '',
        templateText: '210123123123',
        templateTextSecondary: '6901234567',
      },
      buttonText: 'EDIT',
    };
  }

  revealAddressEditingButton() {
    this.setState({
      addressHovering: true,
    });
  }

  revealWebEditingButton() {
    this.setState({
      webHovering: true,
    });
  }

  revealPhoneHoveringButton() {
    this.setState({
      phoneHovering: true,
    });
  }

  hideAddressEditingButton() {
    this.setState({
      addressHovering: false,
    });
  }

  hideWebEditingButton() {
    this.setState({
      webHovering: false,
    });
  }

  hidePhoneEditingButton() {
    this.setState({
      phoneHovering: false,
    });
  }

  createConfirmBtn() {
    this.setState({
      buttonText: 'CONFIRM',
    });
  }

  createEditBtn() {
    this.setState({
      buttonText: 'EDIT',
    });
  }

  startAdressEditing() {
    this.setState({
      addressEditing: true,
    });
  }

  endAdressEditing() {
    this.setState({
      addressEditing: false,
    });
  }

  handleNewAdressMainInput(e) {
    this.setState({
      addressMain: {
        mainInput: e.target.value,
        templateText: this.state.addressMain.templateText,
      },
    });
  }

  confirmNewInput() {
    this.setState({
      addressMain: {
        mainInput: '',
        templateText: this.state.addressMain.mainInput,
      },
    });
  }

  render() {
    const renderAdressEditButton = this.revealAddressEditingButton.bind(this);
    const renderWebEditButton = this.revealWebEditingButton.bind(this);
    const renderPhoneEditButton = this.revealPhoneHoveringButton.bind(this);
    const hideAddressEditButon = this.hideAddressEditingButton.bind(this);
    const hideWebEditButton = this.hideWebEditingButton.bind(this);
    const hidePhoneEditButton = this.hidePhoneEditingButton.bind(this);
    const createConfirmBtn = this.createConfirmBtn.bind(this);
    const createEditBtn = this.createEditBtn.bind(this);
    const startAddressEdit = this.startAdressEditing.bind(this);
    const endAddressEdit = this.endAdressEditing.bind(this);
    const handleAddressInput = this.handleNewAdressMainInput.bind(this);
    const confirmAdressChange = this.confirmNewInput.bind(this);

    return (
      <StyledContactContainer>
        <AddressContainer
          textUpper={this.state.addressMain.templateText}
          textBottom={this.state.addressSecondary.templateTextCity}
          renderBtn={renderAdressEditButton}
          hideBtn={hideAddressEditButon}
          isHovered={this.state.addressHovering}
          isEdited={this.state.addressEditing}
          startEdit={startAddressEdit}
          endEdit={endAddressEdit}
          handleEdit={createConfirmBtn}
          handleChange={handleAddressInput}
          confirmValues={confirmAdressChange}
          handleConfirm={createEditBtn}
          buttonText={this.state.buttonText}
        />
        <WebContainer
          textUpper={this.state.web.templateText}
          textBottom={this.state.web.templateTextSecondary}
          renderBtn={renderWebEditButton}
          hideBtn={hideWebEditButton}
          isHovered={this.state.webHovering}
        />
        <PhoneContainer
          textUpper={this.state.phone.templateText}
          textBottom={this.state.phone.templateTextSecondary}
          renderBtn={renderPhoneEditButton}
          hideBtn={hidePhoneEditButton}
          isHovered={this.state.phoneHovering}
        />
      </StyledContactContainer>
    );
  }
}

export default ContactManager;
