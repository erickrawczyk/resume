import './App.css';
import Header from '@components/Header';
import ExperienceSection from '@/components/ExperienceSection';

import {
  professionalExperiences,
  extracurricularExperiences,
} from '@constants';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="mb-4 border-black" />
      <ExperienceSection experiences={professionalExperiences} />
      <hr className="mb-4 border-black" />
      <ExperienceSection experiences={extracurricularExperiences} />
    </div>
  );
}

export default App;
