import './App.css';
import {
  RightPartition,
  StyledImageHolder,
  StylectContactHeader,
  StyledFooter,
  StyledSkillsHeader,
} from './StyledComponents/Components.styled';
import TitleModal from './Components/TitleModal';
import ContactManager from './Components/ContactManager';
import EductaionHeaderModal from './Components/Education/EductaionHeaderModal';
import ExperienceHeaderModal from './Components/Experience/ExperienceHeaderModal';
import SkillsManager from './Components/SkillsManager';

function App() {
  return (
    <div className="App">
      <StyledImageHolder />
      <RightPartition />
      <TitleModal />
      <StylectContactHeader>CONTACT ME</StylectContactHeader>
      <ContactManager />
      <EductaionHeaderModal />
      <ExperienceHeaderModal />
      <StyledSkillsHeader>SKILLS</StyledSkillsHeader>
      <SkillsManager />
      <StyledFooter />
    </div>
  );
}

export default App;
