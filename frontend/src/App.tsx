import React from 'react';
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { AuthProvider } from "./contexts/auth";
import Routes from './routes'

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

const App: React.FC = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
