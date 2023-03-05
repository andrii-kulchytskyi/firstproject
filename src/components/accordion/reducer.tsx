const XXX = "XXX"

// type StateType = {
//     collapsed: boolean
// }

export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case XXX:
            return !state
    }
    return state
}
type ActionType = {
    type: string
}