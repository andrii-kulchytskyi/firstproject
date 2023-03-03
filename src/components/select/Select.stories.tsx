import React, {useState} from 'react';
import Select from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
}


export const WithValue = () => {
    const [value, setValue] = useState("2")
    return (
        <Select
            value={value}
            items={
                [
                    {value: "1", title: "A"},
                    {value: "2", title: "B"},
                    {value: "3", title: "C"},

                ]
            } onChange={setValue}/>
    );
};

export const WithOutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <Select value={value}
                items={
                    [
                        {value: "1", title: "A"},
                        {value: "2", title: "B"},
                        {value: "3", title: "C"},

                    ]
                } onChange={setValue}/>
    );
};
