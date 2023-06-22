export const AppReducer = (state, action) => {
    switch(state.type){
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}