import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import OnOff from "./OnOff/OnOff";


function hello() {
    console.log("Hello is rendering");
    alert("Heyy IT KAMASUTRA")
}

// hello();

function App() {

    return <div>
        <Accordion title={"Menu"} collapsed={true}/>
        <Accordion title={"Users"} collapsed={false}/>



        <OnOff value={"on"}/>

    </div>

}

export default App;
