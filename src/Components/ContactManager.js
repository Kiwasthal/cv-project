import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
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
      address: {
        mainInput: '',
        secondaryInput: '',
        editing: false,
        templateText: '123 Street Athens',
        templateTextCity: 'Greece',
      },
      webHovering: false,
      web: {
        mainInput: '',
        secondaryInput: '',
        editing: false,
        templateText: 'contact@gmail.com',
        templateTextSecondary: 'www.contactMe.com',
      },
      phoneHovering: false,
      phone: {
        mainInput: '',
        secondaryInput: '',
        editing: false,
        templateText: '210123123123',
        templateTextSecondary: '6901234567',
      },
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

  render() {
    const renderAdressEditButton = this.revealAddressEditingButton.bind(this);
    const renderWebEditButton = this.revealWebEditingButton.bind(this);
    const renderPhoneEditButton = this.revealPhoneHoveringButton.bind(this);
    const hideAddressEditButon = this.hideAddressEditingButton.bind(this);
    const hideWebEditButton = this.hideWebEditingButton.bind(this);
    const hidePhoneEditButton = this.hidePhoneEditingButton.bind(this);

    return (
      <StyledContactContainer>
        <AddressContainer
          textUpper={this.state.address.templateText}
          textBottom={this.state.address.templateTextCity}
          renderBtn={renderAdressEditButton}
          hideBtn={hideAddressEditButon}
          isHovered={this.state.addressHovering}
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
