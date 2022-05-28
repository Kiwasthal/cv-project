import './App.css';
import {
  RightPartition,
  StyledImageHolder,
  StylectContactHeader,
} from './StyledComponents/Components.styled';
import TitleModal from './Components/TitleModal';
function App() {
  return (
    <div className="App">
      <StyledImageHolder />
      <RightPartition />
      <TitleModal />
      <StylectContactHeader>CONTACT ME</StylectContactHeader>
    </div>
  );
}

export default App;
