import React, {useState} from "react";

export default {
    title: 'React.memo.demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const [count, setCounter] = useState(0)
    const [users, setUsers] = useState(["Andasdas", "asdasda", "dasdfasda"])
    const onClickAddUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)

    }
    return <>
        <button onClick={() => {
            setCounter(count + 1)
        }}>+
        </button>
        <button onClick={onClickAddUser}>ADD
        </button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}