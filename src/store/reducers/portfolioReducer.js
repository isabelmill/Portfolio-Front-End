const INITIAL_STATE = {
    portfolio: null,
    filterBy: []
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
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: [ ...action.filterBy ]
            }
        default:
            return state;
    }
}