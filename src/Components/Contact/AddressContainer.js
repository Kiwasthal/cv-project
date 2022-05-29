import { Component } from 'react';
import { StyledContactSubHeader } from '../../StyledComponents/Components.styled';
import { StyledContactInformationContainer } from '../../StyledComponents/Components.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

class AddressContainer extends Component {
  render() {
    return (
      <StyledContactInformationContainer>
        <StyledContactSubHeader>Adress</StyledContactSubHeader>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{
            color: 'orange',
            gridArea: '1 / 1 / 4 / 2',
            justifySelf: 'Center',
            alignSelf: 'center',
            height: '40px',
          }}
        />
      </StyledContactInformationContainer>
    );
  }
}

export default AddressContainer;
