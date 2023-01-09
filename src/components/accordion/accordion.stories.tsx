import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}


export const A = () => {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <Accordion title={"YEA BOY"} onClickCollapse={setCollapsed} collapsed={!collapsed}/>
    )
}