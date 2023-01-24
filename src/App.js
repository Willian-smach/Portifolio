
import './App.css';
import { Panel } from './components/layout/Panel';
import { PersonalInfoPanel } from './components/layout/PersonalInfoPanel';

function App() {
  return (
    <div className="App">
      <PersonalInfoPanel />
      <Panel />
    </div>
  );
}

export default App;
