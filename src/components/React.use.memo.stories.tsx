import React, {useMemo, useState} from "react";

export default {
    title: 'React.use.memo.demo',
}


export const DifficultExample = () => {
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


const UsersSecret = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    const [count, setCounter] = useState(0)
    const [users, setUsers] = useState(["Andasdas", "asdasda", "plit"])
    const filteredArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes("a"))
    }, [users])

    const onClickAddUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(count + 1)
        }}>+
        </button>
        <button onClick={() => {
            onClickAddUser()
        }}>add user
        </button>
        {count}
        <Users users={filteredArray}/>
    </>
}
