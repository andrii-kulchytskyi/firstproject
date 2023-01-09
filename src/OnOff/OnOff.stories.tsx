import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof OnOff>;

export const B = () => {
    let [on, switchOn] = useState(false);

    return (
        <OnOff onClickChange={()=>switchOn(!on)}/>


    )
}
