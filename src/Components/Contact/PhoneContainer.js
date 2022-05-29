import { Component } from 'react';
import {
  StyledContactSubHeader,
  StyledContactInformationHolder,
} from '../../StyledComponents/Components.styled';
import { StyledContactInformationContainer } from '../../StyledComponents/Components.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class PhoneContainer extends Component {
  renderProper() {}

  render() {
    const { textUpper, textBottom, renderBtn, hideBtn, isHovered } = this.props;
    return isHovered ? (
      <StyledContactInformationContainer onMouseLeave={hideBtn}>
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
        <button>edit</button>
      </StyledContactInformationContainer>
    ) : (
      <StyledContactInformationContainer onMouseEnter={renderBtn}>
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
