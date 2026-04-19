import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import AboutUs from './screens/AboutUs';
import Services from './screens/Services';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsOfService from './screens/TermsOfService';
import JobPortal from './screens/JobPortal';
import TrainingModule from './screens/TrainingModule';
import AdminDashboard from './screens/AdminDashboard';
import EmployeePortal from './screens/EmployeePortal';
import Login from './screens/Login';
import { User } from './types';

// Simple Auth Context mock
const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('zealous_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('zealous_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zealous_user');
  };

  return { user, login, logout };
};

export default function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/careers" element={<JobPortal />} />
        <Route path="/portal" element={<Navigate to="/careers" />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login onLogin={auth.login} />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard/*" 
          element={
            auth.user?.role === 'ADMIN' || auth.user?.role === 'SUPER_ADMIN' || auth.user?.role === 'MANAGER'
              ? <AdminDashboard user={auth.user} onLogout={auth.logout} /> 
              : <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/employee/*" 
          element={
            auth.user?.role === 'EMPLOYEE'
              ? <EmployeePortal user={auth.user} onLogout={auth.logout} /> 
              : <Navigate to="/login" />
          } 
        />

        <Route 
          path="/training" 
          element={
            auth.user 
              ? <TrainingModule user={auth.user} /> 
              : <Navigate to="/login" />
          } 
        />

        {/* Home Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
