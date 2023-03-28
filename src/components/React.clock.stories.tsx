import React, {useEffect, useState} from "react";
import Clock from "../Clock";

export default {
    title: 'React.clock.demo',
}

export const DigitalClock = () => {
    return <Clock mode={'d'}/>
}
export const AnalogClock = () => {
    return <Clock mode={'a'}/>
}