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
      webMain: {
        mainInput: '',
        templateText: 'contact@example.com',
      },
      webSecondary: {
        mainInput: '',
        templateText: 'www.example-site.com',
      },
      phoneHovering: false,
      phoneEditing: false,
      phoneMain: {
        mainInput: '',
        templateText: '210-011011010',
      },
      phoneSecondary: {
        mainInput: '',
        templateText: '6901010101',
      },
      buttonAddressText: 'EDIT',
      buttonWebText: 'EDIT',
      buttonPhoneText: 'EDIT',
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

  createConfirmAddressBtn() {
    this.setState({
      buttonAddressText: 'CONFIRM',
    });
  }

  createEditAddressBtn() {
    this.setState({
      buttonAddressText: 'EDIT',
    });
  }

  createConfirmWebBtn() {
    this.setState({
      buttonWebText: 'CONFIRM',
    });
  }

  createEditWebBtn() {
    this.setState({
      buttonWebText: 'EDIT',
    });
  }

  createConfirmPhoneBtn() {
    this.setState({
      buttonPhoneText: 'CONFIRM',
    });
  }

  createEditPhoneBtn() {
    this.setState({
      buttonPhoneText: 'EDIT',
    });
  }

  startAddressEditing() {
    this.setState({
      addressEditing: true,
    });
  }

  endAddressEditing() {
    this.setState({
      addressEditing: false,
    });
  }

  startWebEditing() {
    this.setState({
      webEditing: true,
    });
  }

  endWebEditing() {
    this.setState({
      webEditing: false,
    });
  }

  startPhoneEditing() {
    this.setState({
      phoneEditing: true,
    });
  }

  endPhoneEditing() {
    this.setState({
      phoneEditing: false,
    });
  }

  handleNewAddressMainInput(e) {
    this.setState({
      addressMain: {
        mainInput: e.target.value,
        templateText: this.state.addressMain.templateText,
      },
    });
  }

  handleNewAddressSecondary(e) {
    this.setState({
      addressSecondary: {
        mainInput: e.target.value,
        templateTextCity: this.state.addressSecondary.templateTextCity,
      },
    });
  }

  handleNewWebMainInput(e) {
    this.setState({
      webMain: {
        mainInput: e.target.value,
        templateText: this.state.webMain.templateText,
      },
    });
  }

  handleNewWebSecondary(e) {
    this.setState({
      webSecondary: {
        mainInput: e.target.value,
        templateText: this.state.webSecondary.templateText,
      },
    });
  }

  handleNewPhoneMainInput(e) {
    this.setState({
      phoneMain: {
        mainInput: e.target.value,
        templateText: this.state.phoneMain.templateText,
      },
    });
  }

  handleNewPhoneSecondary(e) {
    this.setState({
      phoneSecondary: {
        mainInput: e.target.value,
        templateText: this.state.phoneSecondary.templateText,
      },
    });
  }

  confirmNewInputAddress() {
    this.setState({
      addressMain: {
        mainInput: '',
        templateText: this.state.addressMain.mainInput,
      },
      addressSecondary: {
        mainInput: '',
        templateTextCity: this.state.addressSecondary.mainInput,
      },
    });
  }

  confirmNewInputWeb() {
    this.setState({
      webMain: {
        mainInput: '',
        templateText: this.state.webMain.mainInput,
      },
      webSecondary: {
        mainInput: '',
        templateText: this.state.webSecondary.mainInput,
      },
    });
  }

  confirmNewInputPhone() {
    this.setState({
      phoneMain: {
        mainInput: '',
        templateText: this.state.phoneMain.mainInput,
      },
      phoneSecondary: {
        mainInput: '',
        templateText: this.state.phoneSecondary.mainInput,
      },
    });
  }

  render() {
    const renderAddressEditButton = this.revealAddressEditingButton.bind(this);
    const renderWebEditButton = this.revealWebEditingButton.bind(this);
    const renderPhoneEditButton = this.revealPhoneHoveringButton.bind(this);
    const hideAddressEditButon = this.hideAddressEditingButton.bind(this);
    const hideWebEditButton = this.hideWebEditingButton.bind(this);
    const hidePhoneEditButton = this.hidePhoneEditingButton.bind(this);
    const createConfirmAddressBtn = this.createConfirmAddressBtn.bind(this);
    const createEditAddressBtn = this.createEditAddressBtn.bind(this);
    const createConfirmWebBtn = this.createConfirmWebBtn.bind(this);
    const createEditWebBtn = this.createEditWebBtn.bind(this);
    const createConfirmPhoneBtn = this.createConfirmPhoneBtn.bind(this);
    const createEditPhoneBtn = this.createEditPhoneBtn.bind(this);
    const startAddressEdit = this.startAddressEditing.bind(this);
    const endAddressEdit = this.endAddressEditing.bind(this);
    const startWebEdit = this.startWebEditing.bind(this);
    const endWebEdit = this.endWebEditing.bind(this);
    const startPhoneEdit = this.startPhoneEditing.bind(this);
    const endPhoneEdit = this.endPhoneEditing.bind(this);
    const handleAddressMainInput = this.handleNewAddressMainInput.bind(this);
    const handleAddressSecondary = this.handleNewAddressSecondary.bind(this);
    const handleWebMainInput = this.handleNewWebMainInput.bind(this);
    const handleNewWebSecondary = this.handleNewWebSecondary.bind(this);
    const handlePhoneMainInput = this.handleNewPhoneMainInput.bind(this);
    const handleNewPhoneSecondary = this.handleNewPhoneSecondary.bind(this);
    const confirmAddressChange = this.confirmNewInputAddress.bind(this);
    const confirmWebChange = this.confirmNewInputWeb.bind(this);
    const confirmPhoneChange = this.confirmNewInputPhone.bind(this);

    return (
      <StyledContactContainer>
        <AddressContainer
          textUpper={this.state.addressMain.templateText}
          textBottom={this.state.addressSecondary.templateTextCity}
          renderBtn={renderAddressEditButton}
          hideBtn={hideAddressEditButon}
          isHovered={this.state.addressHovering}
          isEdited={this.state.addressEditing}
          startEdit={startAddressEdit}
          endEdit={endAddressEdit}
          handleEdit={createConfirmAddressBtn}
          handleMain={handleAddressMainInput}
          handleSecondary={handleAddressSecondary}
          confirmValues={confirmAddressChange}
          handleConfirm={createEditAddressBtn}
          buttonText={this.state.buttonAddressText}
        />
        <WebContainer
          textUpper={this.state.webMain.templateText}
          textBottom={this.state.webSecondary.templateText}
          renderBtn={renderWebEditButton}
          hideBtn={hideWebEditButton}
          isHovered={this.state.webHovering}
          isEdited={this.state.webEditing}
          startEdit={startWebEdit}
          endEdit={endWebEdit}
          handleEdit={createConfirmWebBtn}
          handleMain={handleWebMainInput}
          handleSecondary={handleNewWebSecondary}
          confirmValues={confirmWebChange}
          handleConfirm={createEditWebBtn}
          buttonText={this.state.buttonWebText}
        />
        <PhoneContainer
          textUpper={this.state.phoneMain.templateText}
          textBottom={this.state.phoneSecondary.templateText}
          renderBtn={renderPhoneEditButton}
          hideBtn={hidePhoneEditButton}
          isHovered={this.state.phoneHovering}
          isEdited={this.state.phoneEditing}
          startEdit={startPhoneEdit}
          endEdit={endPhoneEdit}
          handleEdit={createConfirmPhoneBtn}
          handleMain={handlePhoneMainInput}
          handleSecondary={handleNewPhoneSecondary}
          confirmValues={confirmPhoneChange}
          handleConfirm={createEditPhoneBtn}
          buttonText={this.state.buttonPhoneText}
        />
      </StyledContactContainer>
    );
  }
}

export default ContactManager;
