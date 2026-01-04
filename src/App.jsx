import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './components/AppRoutes/AppRoutes';
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopUser from './components/PopUser/PopUser';
import PopNewCard from './components/PopNewCard/PopNewCard';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
          <PopBrowse />
          <PopUser />
          <PopNewCard />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;