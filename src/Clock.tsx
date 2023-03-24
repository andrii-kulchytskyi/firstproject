import React, {useEffect, useState} from 'react';
import {clearInterval} from "timers";


type PropsType = {}

const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    const getNum2Str = (num: number) => num < 10 ? '0' + num : num;

    useEffect(() => {
            setInterval(() => {
                setDate(new Date())
            }, 1000)

        }, []
    )

    return (
        <div>
            <span>{getNum2Str(date.getHours())}</span>:
            <span>{getNum2Str(date.getMinutes())}</span>:
            <span>{getNum2Str(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;