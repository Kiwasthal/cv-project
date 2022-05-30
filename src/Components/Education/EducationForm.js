import uniqid from 'uniqid';
import {
  StyledEducationFormContainer,
  StyledCloseFormSymbol,
  StyledInputWrapper,
  StyledEducationInput,
  StyledCreateEducationSegmentButton,
} from '../../StyledComponents/Components.styled';
import { Component } from 'react';

export class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        date: '',
        university: '',
        degree: '',
        description: '',
        id: uniqid(),
      },
    };
  }

  editingDate(e) {
    this.setState({
      education: {
        date: e.target.value,
        university: this.state.education.university,
        degree: this.state.education.degree,
        description: this.state.education.description,
        id: this.state.education.id,
      },
    });
  }

  editingUniversity(e) {
    this.setState({
      education: {
        date: this.state.education.date,
        university: e.target.value,
        degree: this.state.education.degree,
        description: this.state.education.description,
        id: this.state.education.id,
      },
    });
  }

  editingDegree(e) {
    this.setState({
      education: {
        date: this.state.education.date,
        university: this.state.education.university,
        degree: e.target.value,
        description: this.state.education.description,
        id: this.state.education.id,
      },
    });
  }

  editingDescription(e) {
    this.setState({
      education: {
        date: this.state.education.date,
        university: this.state.education.university,
        degree: this.state.education.degree,
        description: e.target.value,
        id: this.state.education.id,
      },
    });
  }

  revertToStandardDate(defaultValue) {
    if (this.state.education.date === '')
      this.setState({
        education: {
          date: defaultValue,
          university: this.state.education.university,
          degree: this.state.education.degree,
          description: this.state.education.description,
          id: this.state.education.id,
        },
      });
  }

  revertToStandardUniversity = defaultValue => {
    if (this.state.education.university === '')
      this.setState({
        education: {
          date: this.state.education.date,
          university: defaultValue,
          degree: this.state.education.degree,
          description: this.state.education.description,
          id: this.state.education.id,
        },
      });
  };

  revertToStandardDegree = defaultValue => {
    if (this.state.education.university === '')
      this.setState({
        education: {
          date: this.state.education.date,
          university: this.state.education.university,
          degree: defaultValue,
          description: this.state.education.description,
          id: this.state.education.id,
        },
      });
  };

  revertToStandardDescription = defaultValue => {
    if (this.state.education.university === '')
      this.setState({
        education: {
          date: this.state.education.date,
          university: this.state.education.university,
          degree: this.state.education.degree,
          description: defaultValue,
          id: this.state.education.id,
        },
      });
  };

  revertValues = (date, university, degree, description) => {
    this.revertToStandardDate(date);
    this.revertToStandardUniversity(university);
    this.revertToStandardDegree(degree);
    this.revertToStandardDescription(description);
  };

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
    const editUniversity = this.editingUniversity.bind(this);
    const editDegree = this.editingDegree.bind(this);
    const editDescription = this.editingDescription.bind(this);
    const saveOriginalDate = this.revertToStandardDate.bind(this);
    return reEditing ? (
      <StyledEducationFormContainer>
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
            <label style={{ color: 'orange' }}>UNIVERSITY</label>
            <StyledEducationInput
              defaultValue={values.university}
              onChange={editUniversity}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>DEGREE</label>
            <StyledEducationInput
              defaultValue={values.degree}
              onChange={editDegree}
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
              saveOriginalDate(values.date);
              editSegment(
                index,
                this.state.education.date,
                values.date,
                this.state.education.degree,
                values.degree,
                this.state.education.university,
                values.university,
                this.state.education.description,
                values.description
              );
              hideForm();
            }}
          >
            EDIT
          </StyledCreateEducationSegmentButton>
        </form>
      </StyledEducationFormContainer>
    ) : (
      <StyledEducationFormContainer>
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
              value={this.state.education.date}
              onChange={editDate}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>UNIVERSITY</label>
            <StyledEducationInput
              value={this.state.education.university}
              onChange={editUniversity}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>DEGREE</label>
            <StyledEducationInput
              value={this.state.education.degree}
              onChange={editDegree}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label style={{ color: 'orange' }}>DESCRIPTION</label>
            <StyledEducationInput
              value={this.state.education.description}
              onChange={editDescription}
            />
          </StyledInputWrapper>
          <StyledCreateEducationSegmentButton
            onClick={e => {
              e.preventDefault();
              addSegment(this.state.education);
              hide();
            }}
          >
            Create
          </StyledCreateEducationSegmentButton>
        </form>
      </StyledEducationFormContainer>
    );
  }
}

export default EducationForm;
