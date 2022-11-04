import React from "react";

function Accordion(props:any){
    console.log("Accordion is rendering");
    return (<>
        <AccordionTitle titleFromAcc = {props.titleFromApp}/>
        <AccordionBody/>
    </>)
}

function AccordionTitle(props:any){
    console.log("AccordionTitle is rendering");
    return(
        <>
            <h1> {props.titleFromAcc} </h1>
        </>
    );
}
function AccordionBody(){
    console.log("AccordionBody is rendering");
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}
export default Accordion