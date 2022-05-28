import styled from 'styled-components';

const RightPartition = styled.div`
  background-color: #2a2a2c;
  grid-area: 1 / 6 / 8 / 7;
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
  background-color: orange;
  grid-area: 3 / 4 / 4 / 7;
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
`;

const StyledUserSubheader = styled.h4`
  margin: 0;
  padding: 0;
  color: #fff;
  grid-area: 3 / 2 / 4 / 5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledEditButton = styled.button`
  border: 2px solid #2a2a2c;
  padding: 12px 8px;
  font-size: 16px;
  width: 100px;
  height: 50px;
  color: #fff;
`;

export {
  StyledImageHolder,
  StyledTitleModal,
  StyledUserHeader,
  StyledUserSubheader,
  RightPartition,
  StyledEditButton,
};
