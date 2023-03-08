import React, {useMemo, useState} from "react";

export default {
    title: 'React.use.memo.demo',
}


export const Example1 = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)


    let resultB = useMemo(() => {
            let tempResB = 1;
            for (let i = 1; i <= b; i++) {
                tempResB = tempResB * i
            }
            return tempResB
        }, [a]
    )
    let resultA = useMemo(() => {
        let resTempA = 1;
        for (let i = 1; i <= a; i++) {
            resTempA = resTempA * i
        }
        return resTempA

    }, [b])


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

