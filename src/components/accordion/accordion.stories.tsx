import React, {useReducer, useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {reducer} from "./reducer";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}
const onClickCallback = action("Some item was clicked")

export const A = () => {
    // let [collapsed, setCollapsed] = useState<boolean>(false);
    let [state, dispatch] = useReducer(reducer, false)


    return (
        <div>
            <Accordion title={"YEA BOY"} onClickCollapse={() => dispatch({type: "XXX"})}
                       items={[{title: "Loveme", value: "1"}, {title: "Ldasd", value: "2"}, {title: "JJ", value: "3"},]}
                       onClick={()=>{}}
                       collapsed={state}/>
        </div>
    )
}
export const UncontrolledAccordion = () => {
    let [collapsed, setCollapsed] = useState(false);
}

export const ControlledAccordionWithItems = () => {

}