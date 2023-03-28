import React, {useEffect, useState} from 'react';
import './stories/clock.css'

type PropsType = {
    mode: 'd' | 'a'
}
type PropsDate = {
    date: Date
}
export const getNum2Str = (num: number) => num < 10 ? '0' + num : num;
const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
            setInterval(() => {
                setDate(new Date())
            }, 1000)

        }, []
    )

    return <>
        {
            props.mode === 'd' ?
                <Digital date={date}/>
                :
                <Analog date={date}/>
        }
    </>
};
export default Clock;

export const Digital = (props: PropsDate) => {
    return <>
        <div>
            <span>{getNum2Str(props.date.getHours())}</span>:
            <span>{getNum2Str(props.date.getMinutes())}</span>:
            <span>{getNum2Str(props.date.getSeconds())}</span>
        </div>
    </>
}
export const Analog = (props: PropsDate) => {
    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };
    return <>


        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
            <div className={"digital-clock"}></div>
        </div>
    </>
}