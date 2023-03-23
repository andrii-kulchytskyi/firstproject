import React, {useEffect, useState} from "react";

export default {
    title: 'React.useEffect.demo',
}


export const Example1 = () => {

    const [count, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        document.title = count.toString()
        console.log('every render')
    })
    useEffect(() => {
        document.title = count.toString()
        console.log('1 time')
    }, [])
    useEffect(() => {
        document.title = count.toString()
        console.log('when count changed')
    }, [count])
    return <>
        <button onClick={() => {
            setCounter(count + 1)
        }}>COUNT+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>FAKE+
        </button>

    </>
}
export const ExampleSetCounter = () => {

    const [count, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log("set timeout")
            setCounter(state => state + 1)
        })
    }, [count])

    return <>
        <button onClick={() => {
            setCounter(count + 1)
        }}>COUNT+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>FAKE+
        </button>

    </>
}
export const ExampleSetInterval = () => {

    const [count, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log("set interv")
            setCounter(state => state + 1)
        })
    }, [count])

    return <>
        <button onClick={() => {
            setCounter(count + 1)
        }}>COUNT+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>FAKE+
        </button>

    </>
}