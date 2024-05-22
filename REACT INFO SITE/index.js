/* import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(<App />, document.getElementById("root")); */

/* import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root")) */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this path is correct

// Get the root element from the HTML
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root
root.render(<App />);
