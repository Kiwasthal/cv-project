import styled from 'styled-components';

const RightPartition = styled.div`
  background-color: #2a2a2c;
  grid-area: 1 / 7 / 15 / 8;
  z-index: 999;
`;

const StyledImageHolder = styled.div`
  border-radius: 150px;
  border: 10px solid #2a2a2c;
  background-color: #f9dd99;
  grid-area: 2 /3 /7 /5;
  z-index: 1001;
`;

const StyledTitleModal = styled.div`
  background-color: #f39e09;
  grid-area: 3 / 4 / 4 / 8;
  display: grid;
  grid-template-rows: 20% 40% 20% 20%;
  grid-template-columns: 30% 5% 35% 30%;
  z-index: 1000;
`;

const StyledUserHeader = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  grid-area: 2 / 2 / 3 / 5;
  display: flex;
  justify-content: flex-start;
  cursor: default;
`;

const StyledUserSubheader = styled.h4`
  margin: 0;
  padding: 0;
  color: #fff;
  grid-area: 3 / 2 / 4 / 5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: default;
`;

const StyledEditButton = styled.button`
  border: 3px solid #2a2a2c;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  font-size: 24px;
  width: 100px;
  height: 50px;
  color: #fff;
  justify-self: flex-end;
  background-color: orange;
  border-radius: 25px;
  box-shadow: 0px 5px 3px black;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #fff;
    color: orange;
    &:active {
      transform: translateY(4px);
    }
  }
`;

const StyledTitleInputMain = styled.input`
  padding: 3px;
  border: none;
  outline: none;
  background-color: black;
  width: 60%;
  height: 60%;
  color: #fff;
  font-weight: 600;
  grid-area: 2 / 2 / 3 / 5;
  transition: all 0.2s ease-in;
  &:hover {
    border-radius: 20px;
    &:focus {
      padding-left: 10px;
      font-weight: 600;
      color: #fff;
      border: 2px solid yellow;
      transform: scale(1.1);
    }
  }
`;

const StyledTitleInputSecondary = styled.input`
  padding: 3px;
  outline: none;
  background-color: black;
  width: 60%;
  height: 80%;
  color: #fff;
  font-weight: 600;
  grid-area: 3 / 2 / 4 / 5;
  transition: all 0.2s ease-in;
  &:hover {
    border-radius: 20px;
    &:focus {
      padding-left: 10px;
      font-weight: 600;
      color: #fff;
      border: 2px solid yellow;
      transform: scale(1.1);
    }
  }
`;

const StylectContactHeader = styled.h5`
  margin: 0;
  color: #fff;
  width: 40%;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  height: 50%;
  padding: 10px 5px;
  border: 2px solid #f39e09;
  z-index: 1001;
  grid-area: 5 / 7 / 6 / 8;
  cursor: default;
`;

const StyledContactContainer = styled.div`
  justify-self: center;
  width: 80%;
  grid-area: 7 / 7 / 10 / 8;
  border: 1px solid red;
  z-index: 1000;
  display: grid;
  grid-template-rows: 70px 70px 70px;
`;

const StyledContactInformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const StyledContactSubHeader = styled.h6`
  margin: 0;
  color: #fff;
  align-self: flex-end;
  justify-self: flex-start;
`;

const StyledEducationModal = styled.div`
  grid-area: 8 / 1 / 9 /6;
  background-color: orange;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledEducationTitle = styled.h4`
  margin: 0;
  font-size: 1.15rem;
  letter-spacing: 2px;
  color: #fff;
  padding-right: 20px;
`;

const StyledFooter = styled.div`
  grid-area: 13 / 1 / 14 / 7;
  background-color: orange;
`;

export {
  StyledImageHolder,
  StyledTitleModal,
  StyledUserHeader,
  StyledUserSubheader,
  RightPartition,
  StyledEditButton,
  StyledTitleInputMain,
  StyledTitleInputSecondary,
  StylectContactHeader,
  StyledContactContainer,
  StyledContactInformationContainer,
  StyledContactSubHeader,
  StyledEducationModal,
  StyledEducationTitle,
  StyledFooter,
};
