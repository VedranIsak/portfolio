import './App.css';
import TopContainer from './TopContainer/TopContainer';
import EducationContainer from './EducationContainer/EducationContainer';
import ProjectsContainer from './ProjectsContainer/ProjectsContainer';
import ExperienceContainer from './ExperienceContainer/ExperienceContainer';
import SkillsContainer from './SkillsContainer/SkillsContainer';

const firstHrefs = ['https://www.sqlservertutorial.net/getting-started/what-is-sql-server/', 'https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0', 
'https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern', 
'https://reactjs.org/'];
const firstAnchors = ['SQL', 'ASP.NET', 'WPF', 'React'];

const secondHrefs = ['https://www.geeksforgeeks.org/data-structures/', 'https://www.geeksforgeeks.org/introduction-of-er-model/', 
'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming', 'https://www.agilealliance.org/agile101/'];
const secondAnchors = ['D-Structs', 'ER', 'OOP', 'Agile'];


function App() {
  return (
    <>
      <TopContainer />
      <EducationContainer firstAnchorTexts={firstAnchors} firstHrefs={firstHrefs} secondAnchorTexts={secondAnchors} secondHrefs={secondHrefs} />
      <ProjectsContainer />
      <ExperienceContainer />
      <SkillsContainer />
    </>
  );
}

export default App;
