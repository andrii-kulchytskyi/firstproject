import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating as R} from "./components/rating/Rating";


function hello() {
    console.log("Hello is rendering");
    alert("Heyy IT KAMASUTRA")
}

// hello();

function App() {
    console.log("App is rendering");
    return (
        <div>
            This is App component

            <Accordion title={"Menu"} collapsed = {true}/>
            <Accordion title={"Users"} collapsed = {false}/>
            <R value={0}/>
            <R value={1}/>
            <R value={2}/>
            <R value={3}/>
            <R value={4}/>
            <R value={5}/>
        </div>
    );
}

export default App;