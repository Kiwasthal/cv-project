import './App.css';
import {
  RightPartition,
  StyledImageHolder,
} from './StyledComponents/Components.styled';
import TitleModal from './Components/TitleModal';
function App() {
  return (
    <div className="App">
      <StyledImageHolder />
      <RightPartition />
      <TitleModal />
    </div>
  );
}

export default App;
