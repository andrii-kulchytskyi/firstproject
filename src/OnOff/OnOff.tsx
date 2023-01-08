import React, {useState} from 'react';


type OnOffProps = {
    on: boolean
    onClickChange: (isOn: boolean) => void
}

const OnOff = (props: OnOffProps) => {


    let styleOff = {
        backgroundColor: props.on ? "red" : "white"
    }
    let styleOn = {
        backgroundColor: !props.on ? "green" : "white"
    }
    return (

        <div>
            <button style={styleOn} onClick={() => props.onClickChange(props.on)}>ON</button>
            <button style={styleOff} onClick={() => props.onClickChange(props.on)}>OFF</button>
        </div>
    );
};

export default OnOff;