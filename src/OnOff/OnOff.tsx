import React from 'react';


type OnOffProps = {
    value: "on" | "off"
}

const OnOff = (props: OnOffProps) => {
    return (
        <div>
        <text>{props.value == "on"}</text>
        <text>{props.value == "off"}</text>
        </div>
    );
};

export default OnOff;