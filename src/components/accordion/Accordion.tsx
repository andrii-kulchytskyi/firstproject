import React from "react";


type AccordionType = {
    title: string
    collapsed: boolean
}
function Accordion(props: AccordionType) {
    console.log("Accordion is rendering");
    if(props.collapsed === true){
        return (<>
            <AccordionTitle titleFrom={props.title}/>
        </>)
    }else{
        return (<>
            <AccordionBody />
        </>)
    }

}
type AccordionTitleType = {
    titleFrom: string

}
function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle is rendering");
    return (
        <>
            <h1> {props.titleFrom} </h1>
        </>
    );
}

function AccordionBody() {
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