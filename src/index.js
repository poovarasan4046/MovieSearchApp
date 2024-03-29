import React from "react";
import { createRoot }  from "react-dom/client";

import './index.css'
import App from './App'

const rootInstance = createRoot( document.getElementById('root'));
rootInstance.render(<App />);