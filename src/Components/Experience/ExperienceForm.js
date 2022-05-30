import uniqid from 'uniqid';
import {
  StyledExperienceFormContainer,
  StyledCloseFormSymbol,
  StyledInputWrapper,
  StyledEducationInput,
  StyledCreateEducationSegmentButton,
} from '../../StyledComponents/Components.styled';

import React, { Component } from 'react';

export class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        date: '',
        workplace: '',
        position: '',
        description: '',
        id: uniqid(),
      },
    };
  }
  editingDate(e) {
    this.setState({
      experience: {
        date: e.target.value,
        workplace: this.state.experience.workplace,
        position: this.state.experience.position,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
    });
  }
  editingWorkplace(e) {
    this.setState({
      experience: {
        date: this.state.experience.date,
        workplace: e.target.value,
        position: this.state.experience.position,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
    });
  }
  editingPosition(e) {
    this.setState({
      experience: {
        date: this.state.experience.date,
        workplace: this.state.experience.workplace,
        position: e.target.value,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
    });
  }
  editingDescription(e) {
    this.setState({
      experience: {
        date: this.state.experience.date,
        workplace: this.state.experience.workplace,
        position: this.state.experience.position,
        description: e.target.value,
        id: this.state.experience.id,
      },
    });
  }

  render() {
    const {
      hide,
      addSegment,
      values,
      reEditing,
      hideForm,
      index,
      editSegment,
    } = this.props;
    const editDate = this.editingDate.bind(this);
    const editWorkplace = this.editingWorkplace.bind(this);
    const editPosition = this.editingPosition.bind(this);
    const editDescription = this.editingDescription.bind(this);
    return reEditing ? (
      <StyledExperienceFormContainer>
        <StyledCloseFormSymbol
          style={{ color: 'orange', fontSize: '30px', top: '0' }}
          onClick={hideForm}
        >
          +
        </StyledCloseFormSymbol>
        <form
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            justifyItems: 'space-evenly',
          }}
        >
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>FROM-TO</label>
            <StyledEducationInput
              defaultValue={values.date}
              onChange={editDate}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>WORKPLACE</label>
            <StyledEducationInput
              defaultValue={values.workplace}
              onChange={editWorkplace}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>POSITION</label>
            <StyledEducationInput
              defaultValue={values.position}
              onChange={editPosition}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>DESCRIPTION</label>
            <StyledEducationInput
              defaultValue={values.description}
              onChange={editDescription}
            />
          </StyledInputWrapper>
          <StyledCreateEducationSegmentButton
            onClick={e => {
              e.preventDefault();
              editSegment(
                index,
                this.state.experience.date,
                values.date,
                this.state.experience.workplace,
                values.workplace,
                this.state.experience.position,
                values.position,
                this.state.experience.description,
                values.description
              );
              hideForm();
            }}
          >
            EDIT
          </StyledCreateEducationSegmentButton>
        </form>
      </StyledExperienceFormContainer>
    ) : (
      <StyledExperienceFormContainer>
        <StyledCloseFormSymbol
          style={{ color: 'orange', fontSize: '30px', top: '0' }}
          onClick={hide}
        >
          +
        </StyledCloseFormSymbol>
        <form
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            justifyItems: 'space-evenly',
          }}
        >
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>FROM-TO</label>
            <StyledEducationInput
              value={this.state.experience.date}
              onChange={editDate}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>WORKPLACE</label>
            <StyledEducationInput
              value={this.state.experience.workplace}
              onChange={editWorkplace}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>POSITION</label>
            <StyledEducationInput
              value={this.state.experience.position}
              onChange={editPosition}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>DESCRIPTION</label>
            <StyledEducationInput
              value={this.state.experience.description}
              onChange={editDescription}
            />
          </StyledInputWrapper>
          <StyledCreateEducationSegmentButton
            onClick={e => {
              e.preventDefault();
              addSegment(this.state.experience);
              hide();
            }}
          >
            Create
          </StyledCreateEducationSegmentButton>
        </form>
      </StyledExperienceFormContainer>
    );
  }
}

export default ExperienceForm;
