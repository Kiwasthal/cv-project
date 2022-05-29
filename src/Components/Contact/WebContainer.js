import { Component } from 'react';
import {
  StyledContactSubHeader,
  StyledContactInformationHolder,
} from '../../StyledComponents/Components.styled';
import { StyledContactInformationContainer } from '../../StyledComponents/Components.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

class WebContainer extends Component {
  render() {
    const { textUpper, textBottom } = this.props;
    return (
      <StyledContactInformationContainer>
        <StyledContactSubHeader>WEB</StyledContactSubHeader>
        <FontAwesomeIcon
          icon={faGlobe}
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
      </StyledContactInformationContainer>
    );
  }
}

export default WebContainer;
