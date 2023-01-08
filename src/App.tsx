import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import OnOff from "./OnOff/OnOff";
import {Accordion} from "./components/accordion/Accordion";


function hello() {
    console.log("Hello is rendering");
    alert("Heyy IT KAMASUTRA")
}

// hello();

function App() {

    return <div>
        {/*<Accordion title={"Menu"} collapsed={true}/>*/}
        {/*<Accordion title={"Users"} collapsed={false}/>*/}
        <OnOff/>
        <Accordion title={"Menu"}/>
        <Rating/>

    </div>

}

export default App;
