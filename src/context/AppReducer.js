export const AppReducer = (state, action) => {
    let newState;
    switch(action.type){
        case 'ADD_TRANSACTION':
            newState = {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
            localStorage.setItem('transactions', JSON.stringify(newState.transactions));
            return newState;
        case 'DELETE_TRANSACTION':
            newState = {
                ...state,
                transactions: state.transactions.filter((t) => t.id !== action.payload)
            }
            localStorage.setItem('transactions', JSON.stringify(newState.transactions));
            return newState;
        default:
            return state;
    }
}