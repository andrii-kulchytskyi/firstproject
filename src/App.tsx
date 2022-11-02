import React from 'react';
import logo from './logo.svg';
import './App.css';


function hello(){
    debugger
    alert("Heyy IT KAMASUTRA")
}
// hello();

function App() {
    return (
        <div>
            This is App component
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}

function Accordion(){
    return <div>
        <h3> Menu </h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
