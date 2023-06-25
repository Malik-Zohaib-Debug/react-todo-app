const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                tasks: [action.payload, ...state]
            }
        case 'DELETE_TASK':
            return{
                ...state,
                task: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}

export default AppReducer;