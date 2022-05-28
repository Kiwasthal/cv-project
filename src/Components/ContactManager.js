import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { StyledContactContainer } from '../StyledComponents/Components.styled';
// {/* <FontAwesomeIcon icon={faLocationDot} style={{ color: 'orange' }} />
//         <FontAwesomeIcon icon={faGlobe} style={{ color: 'orange' }} />
//         <FontAwesomeIcon icon={faPhone} style={{ color: 'orange' }} /> */}

import { Component } from 'react';

export class ContactManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }
  render() {
    return <StyledContactContainer></StyledContactContainer>;
  }
}

export default ContactManager;
