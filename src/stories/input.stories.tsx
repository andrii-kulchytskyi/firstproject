import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
    title: "input",

}
export const UncontrolledInput = () => {
    const [value, setValue] = useState("")
    let ref = useRef<HTMLInputElement>(null)

    const onClickLeGo = () => {
        let v = ref.current as HTMLInputElement
        setValue(v.value)
    }
    return <>
        <input ref={ref}/>
        <button onClick={onClickLeGo}></button>
        actual value = {value}
    </>
}