import React, {useState} from 'react';
import './App.css';
import {Rating, RatingPropsValueType} from "./components/rating/Rating";
import OnOff from "./OnOff/OnOff";
import {Accordion} from "./components/accordion/Accordion";

function App() {

    let [rate, setRate] = useState<RatingPropsValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false);

    return <div>
        <OnOff on={!on} onClickChange={setOn}/>
        <Accordion title={"Menu"} onClickCollapse={setAccordionCollapsed} collapsed={!accordionCollapsed}/>
        <Rating onClick={setRate} value={rate} selected={false}/>

    </div>

}

export default App;

