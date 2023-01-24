import React, {useState} from "react";


export type AccordionType = {
    title: string
    onClickCollapse: (value: boolean) => void
    collapsed: boolean
    items: ItemType[]
    onClickDoIt: (value: any) => void
}
export type AccordionBodyArray = {
    items: ItemType[]
    onClickDoIt: (value: any) => void
}

export type ItemType = {
    value: string
    title: string
}

export function Accordion(props: AccordionType) {
    return (
        <>
            <AccordionTitle isCollapsed={props.collapsed} onClickCollapse={props.onClickCollapse}
                            titleValue={props.title}/>
            {props.collapsed && <AccordionBody items={props.items} onClickDoIt={props.onClickDoIt}/>}
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

export function AccordionBody(props: AccordionBodyArray) {
    console.log("AccordionBody is rendering");
    return (
        <>
            {props.items.map((el, index) => <li key={index} onClick={()=>props.onClickDoIt(el.value)}>{el.title}</li>)}
        </>
    )
}
