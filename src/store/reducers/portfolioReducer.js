const INITIAL_STATE = {
    portfolio: null,
    isCorrectPassword: false
}


export function portfolioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_PORTFOLIO':
            return {
                ...state,
                portfolio: { ...action.portfolio }
            }
        case 'UPDATE_PORTFOLIO':
            return {
                ...state,
                portfolio: { ...action.portfolio }
            }
        case 'SET_IS_CORRECT_PASSWORD':
            return {
                ...state,
                isCorrectPassword: action.isCorrect
            }
        default:
            return state;
    }
}