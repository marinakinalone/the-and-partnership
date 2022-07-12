import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Intro, NordeaFleet, LexusLine, NordeaVideo } from './components/Index';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/nordea-fleet" element={<NordeaFleet />} />
          <Route path="/lexus-line" element={<LexusLine />} />
          <Route path="/nordea-video" element={<NordeaVideo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
