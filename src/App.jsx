//// import logo from './logo.svg';
//// import './App.css';
import React from "react";
import NamesClass from "./components/NamesClass";
import Navbar from "./components/Navbar";




function App(props) {
    return (
        // JSX: React Fragment
        <React.Fragment>
            {/* Can insert components like Lego */}
            <Navbar />
            <div className = "container">
                {/* How neat is that? */}
                <NamesClass />
                {/* That's pretty neat! */}
            </div>
        </React.Fragment>
    );
};




export default App;