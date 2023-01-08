import React, {useState} from "react";


export type AccordionType = {
    title: string
    // collapsed: boolean
}

export function Accordion(props: AccordionType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle titleValue={props.title}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>TOGGLE
            </button>
            {collapsed && <AccordionBody/>}
        </>)
}

export  type AccordionTitleType = {
    titleValue: string
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle is rendering");
    return (
        <>
            <h1> {props.titleValue} </h1>

        </>
    );
}

export function AccordionBody() {
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
