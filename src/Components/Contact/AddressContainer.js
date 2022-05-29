import { Component } from 'react';
import {
  StyledContactSubHeader,
  StyledContactInformationHolder,
} from '../../StyledComponents/Components.styled';
import { StyledContactInformationContainer } from '../../StyledComponents/Components.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

class AddressContainer extends Component {
  render() {
    const { textUpper, textBottom, renderBtn, hideBtn, isHovered } = this.props;
    return isHovered ? (
      <StyledContactInformationContainer onMouseLeave={hideBtn}>
        <StyledContactSubHeader>ADDRESS</StyledContactSubHeader>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{
            color: 'orange',
            gridArea: '1 / 1 / 4 / 2',
            justifySelf: 'Center',
            alignSelf: 'flex-start',
            height: '35px',
            marginTop: '10px',
          }}
        />
        <StyledContactInformationHolder>
          {textUpper}
        </StyledContactInformationHolder>
        <StyledContactInformationHolder>
          {textBottom}
        </StyledContactInformationHolder>
        <button style={{ position: 'absolute' }}>Edit </button>
      </StyledContactInformationContainer>
    ) : (
      <StyledContactInformationContainer onMouseEnter={renderBtn}>
        <StyledContactSubHeader>ADDRESS</StyledContactSubHeader>
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{
            color: 'orange',
            gridArea: '1 / 1 / 4 / 2',
            justifySelf: 'Center',
            alignSelf: 'flex-start',
            height: '35px',
            marginTop: '10px',
          }}
        />
        <StyledContactInformationHolder style={{ gridArea: 2 / 2 / 3 / 3 }}>
          {textUpper}
        </StyledContactInformationHolder>
        <StyledContactInformationHolder style={{ gridArea: 1 / 2 / 2 / 3 }}>
          {textBottom}
        </StyledContactInformationHolder>
      </StyledContactInformationContainer>
    );
  }
}

export default AddressContainer;
