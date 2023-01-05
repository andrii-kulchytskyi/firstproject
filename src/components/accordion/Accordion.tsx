import React from "react";


type AccordionType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionType) {
    console.log("Accordion is rendering");
    if (props.collapsed) {
        return (<>
            <AccordionTitle titleValue={props.title}/>
        </>)
    } else {
        return (<>
            <AccordionTitle titleValue={props.title}/>
            <AccordionBody/>
        </>)
    }

}

type AccordionTitleType = {
    titleValue: string

}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle is rendering");
    return (
        <>
            <h1> {props.titleValue} </h1>
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