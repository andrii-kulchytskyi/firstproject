export default {
    title: 'React.memo.demo',
}

const Counter = (props: any) => {
    return <div>{props.count}</div>
}
const Users = (props: {users: string[]}) => {
    return <div>{props.users.map(u=>u)}</div>
}


export const Example1 = () => {

}