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
      address: {
        mainInput: '',
        secondaryInput: '',
        editing: false,
        templateText: '123 Street Athens',
        templateTextCity: 'Greece',
      },
      web: {
        mainInput: '',
        secondaryInput: '',
        editing: false,
        templateText: 'contact@gmail.com',
        templateTextSecondary: 'www.contactMe.com',
      },
      phone: {
        mainInput: '',
        secondaryInput: '',
        editing: false,
        templateText: '210123123123',
        templateTextSecondary: '6901234567',
      },
    };
  }
  render() {
    return (
      <StyledContactContainer>
        <AddressContainer
          textUpper={this.state.address.templateText}
          textBottom={this.state.address.templateTextCity}
        />
        <WebContainer
          textUpper={this.state.web.templateText}
          textBottom={this.state.web.templateTextSecondary}
        />
        <PhoneContainer
          textUpper={this.state.phone.templateText}
          textBottom={this.state.phone.templateTextSecondary}
        />
      </StyledContactContainer>
    );
  }
}

export default ContactManager;
