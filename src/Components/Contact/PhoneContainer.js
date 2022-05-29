import { Component } from 'react';
import {
  StyledContactSubHeader,
  StyledContactInformationHolder,
} from '../../StyledComponents/Components.styled';
import { StyledContactInformationContainer } from '../../StyledComponents/Components.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class PhoneContainer extends Component {
  render() {
    const { textUpper, textBottom } = this.props;
    return (
      <StyledContactInformationContainer>
        <StyledContactSubHeader>PHONE</StyledContactSubHeader>
        <FontAwesomeIcon
          icon={faPhone}
          style={{
            color: 'orange',
            gridArea: '1 / 1 / 4 / 2',
            justifySelf: 'Center',
            alignSelf: 'flex-start',
            height: '30px',
            marginTop: '10px',
          }}
        />
        <StyledContactInformationHolder>
          {textUpper}
        </StyledContactInformationHolder>
        <StyledContactInformationHolder>
          {textBottom}
        </StyledContactInformationHolder>
      </StyledContactInformationContainer>
    );
  }
}

export default PhoneContainer;
