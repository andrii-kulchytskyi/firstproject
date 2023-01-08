import React, {useState} from 'react';


type OnOffProps = {
    onClickChange: (isOn: boolean) => void
}


const OnOff = (props: OnOffProps) => {
    let [on, setOn] = useState(false);

    let styleOff = {
        backgroundColor: on ? "red" : "white"
    }
    let styleOn = {
        backgroundColor: !on ? "green" : "white"
    }

    const onClicked = () => {
        setOn(true)
        props.onClickChange(on)
    }
    const offClicked = () => {
        setOn(false)
        props.onClickChange(on)
    }
    return (

        <div>
            <button style={styleOn} onClick={onClicked}>ON</button>
            <button style={styleOff} onClick={offClicked}>OFF</button>
        </div>
    );
};

export default OnOff;