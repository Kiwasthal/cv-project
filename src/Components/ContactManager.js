import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { StyledContactContainer } from '../StyledComponents/Components.styled';
import AddressContainer from './Contact/AddressContainer';
//         <FontAwesomeIcon icon={faGlobe} style={{ color: 'orange' }} />
//         <FontAwesomeIcon icon={faPhone} style={{ color: 'orange' }} /> */}

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
        templateTextCity: 'Athens',
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
        <AddressContainer />
        <AddressContainer />
        <AddressContainer />
      </StyledContactContainer>
    );
  }
}

export default ContactManager;
