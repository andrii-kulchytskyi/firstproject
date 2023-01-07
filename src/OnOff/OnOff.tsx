import React, {useState} from 'react';


type OnOffProps = {
    on: boolean
}

const OnOff = () => {

    let [on, setOn] = useState(false);

    let styleOff = {
        backgroundColor: on ? "red" : "white"
    }
    let styleOn = {
        backgroundColor: !on ? "green" : "white"
    }
    return (

        <div>
            <button style={styleOn} onClick={() => setOn(true)}>ON</button>
            <button style={styleOff} onClick={() => setOn(false)}>OFF</button>
        </div>
    );
};

export default OnOff;