// src/main.jsx
import React from 'react'; // Imports React, necessary for using JSX.
import { createRoot } from 'react-dom/client'; // Imports the createRoot function from react-dom to render the app.
import App from './App.jsx'; // Imports the main App component from App.jsx.
import Container from './contexts/globalContext.jsx'; // Imports Container from the global context.
import './global.scss'; // Imports global style file global.scss.

// Uses the createRoot function to create a rendering root and renders the app in the div with id 'root'.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* React.StrictMode activates additional checks and warnings for its descendants. */}

    <Container>
      {/* Container provides a global context for child components. */}
      <App /> {/* Renders the main App component. */}
    </Container>
  </React.StrictMode>
);
