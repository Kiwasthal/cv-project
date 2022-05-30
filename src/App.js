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
import EducationHeaderModal from './Components/Education/EducationHeaderModal';
import ExperienceHeaderModal from './Components/Experience/ExperienceHeaderModal';
import SkillsManager from './Components/SkillsManager';
import EducationManager from './Components/EducationManager';

function App() {
  return (
    <div className="App">
      <StyledImageHolder />
      <RightPartition />
      <TitleModal />
      <StylectContactHeader>CONTACT ME</StylectContactHeader>
      <ContactManager />
      <EducationHeaderModal />
      <EducationManager />
      <ExperienceHeaderModal />
      <StyledSkillsHeader>SKILLS</StyledSkillsHeader>
      <SkillsManager />
      <StyledFooter />
    </div>
  );
}

export default App;
