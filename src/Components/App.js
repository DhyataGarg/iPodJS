//  In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.

// Importing all the required stuff.
import React from 'react';
import Frame from "./Frame";

// App Function which is our main app which would be rendered on the screen.
function App() {
    // This function is in turn rendering the frame component;
    return (
        <Frame></Frame>
    )
}

// Exporting the APP function so that our index.js, which is the entry point of our project, can import it.
export default App;