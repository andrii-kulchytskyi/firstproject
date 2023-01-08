import React, {useState} from "react";


export type AccordionType = {
    title: string
    onClickCollapse: (value:boolean) => void
    collapsed: boolean
}

export function Accordion(props: AccordionType) {
    return (
        <>
            <AccordionTitle isCollapsed={props.collapsed} onClickCollapse={props.onClickCollapse}
                            titleValue={props.title}/>
            {props.collapsed && <AccordionBody/>}
        </>)
}

export  type AccordionTitleType = {
    titleValue: string
    onClickCollapse: (isCollapsed: boolean) => void
    isCollapsed: boolean
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle is rendering");
    return (
        <>
            <h1 onClick={() => {
                props.onClickCollapse(props.isCollapsed)
            }}> {props.titleValue} </h1>

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
