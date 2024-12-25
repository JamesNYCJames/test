import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Correct import path

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet /> {/* Renders the content of the matched child route */}
    </div>
  );
}

export default App;