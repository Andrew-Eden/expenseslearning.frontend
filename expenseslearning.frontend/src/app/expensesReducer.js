const initialState = {
    expenses: [],
}

export const ActionTypes = {
    SET_EXPENSES: 'SET_EXPENSES',
}

export const ActionCreators = {
    setExpenses: payload => ({ type: ActionTypes.SET_EXPENSES, payload }),
}
//expensesReducerVar was created to fix a compile error that was not present in tutorial videos
const expensesReducerVar = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_EXPENSES:
            return { ...state, expenses: [...action.payload] };
        default:
            return state;
    }
}

export default expensesReducerVar;