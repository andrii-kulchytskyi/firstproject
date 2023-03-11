import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'React.use.callback.memo.demo',
}


const UsersSecret = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    const [count, setCounter] = useState(0)
    const [users, setUsers] = useState(["Andasdas", "asdasda", "plit"])
    const filteredArray = useCallback(() => {
        users.filter(u => u.toLowerCase().includes("a"))
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
        {/*<Users users={filteredArray}/>*/}
    </>
}
