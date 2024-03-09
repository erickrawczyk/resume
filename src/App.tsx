import './App.css';
import Header from '@components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import ExperienceItem from '@/components/ExperienceItem';

import {
  professionalExperiences,
  extracurricularExperiences,
  education,
} from '@constants';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="mb-4 border-black" />
      <ExperienceSection experiences={professionalExperiences} />
      <hr className="my-4 border-black" />
      <ExperienceSection experiences={extracurricularExperiences} />
      <hr className="my-4 border-black" />
      <ExperienceItem experience={education} />
    </div>
  );
}

export default App;
