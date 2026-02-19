import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile } from './pages/profile';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { SignUp } from './pages/signup';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

// Subindo a régua: Componente de Rota Protegida (Gateway)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('@dio:user'); // Verifica o "token" no lab
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Rota Protegida: Só entra no Feed se estiver logado */}
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />,
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* ToastContainer Global: Configurado para o tema Dark da DIO */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;