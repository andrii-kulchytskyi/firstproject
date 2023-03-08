import React, {useState} from "react";

export default {
    title: 'React.use.memo.demo',
}


export const Example1 = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1;
    for (let i = 1; i <= a; i++) {
        resultA = resultA * i
    }

    let resultB = 1;
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result a: {resultA}
        </div>
        <div>
            Result b: {resultB}
        </div>
    </div>
}

