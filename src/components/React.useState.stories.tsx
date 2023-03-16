import React, {useMemo, useState} from "react";

export default {
    title: 'React.usestate.demo',
}


export const Example1 = () => {

    const [count, setCounter] = useState(0)
    const generate = useMemo(() => count, [])
    return <>
        <button onClick={() => {
            setCounter(count + 1)
        }}>+
        </button>
        {count}
    </>
}