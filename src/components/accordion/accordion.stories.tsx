import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion, AccordionBody} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}
const onClickCallback=()=>action("Some item was clicked")

export const A = () => {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <Accordion title={"YEA BOY"} onClickCollapse={setCollapsed} collapsed={!collapsed} items={[{title: "Loveme", value:"1"},{title: "Ldasd", value:"2"},{title: "JJ", value:"3"},]} onClickDoIt={onClickCallback}/>
        </div>
    )
}
export const UncontrolledAccordion = () => {
    let [collapsed, setCollapsed] = useState(false);
}

export const ControlledAccordionWithItems = () => {

}