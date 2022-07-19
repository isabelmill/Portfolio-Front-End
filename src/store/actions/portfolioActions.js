import { portfolioService } from '../../services/portfolio'

export function loadPortfolio() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().portfolioModule
            let portfolio = await portfolioService.query(filterBy)
            dispatch({ type: 'SET_PORTFOLIO', portfolio })
        } catch (err) {
            console.log('Couldn`t Load Portfolio:', err)
        }

    }
}

export function updatePortfolio(updatedPortfolio) {
    return async (dispatch) => {
        try {
            let portfolioToSave = await portfolioService.update(updatedPortfolio)
            dispatch({ type: 'UPDATE_PORTFOLIO', portfolio: portfolioToSave })
        } catch (err) {
            console.log('Couldn`t Update Portfolio:', err)
        }

    }
}

export function setIsCorrectPassword(isCorrect) {
    return async (dispatch) => {
        dispatch({ type: 'SET_IS_CORRECT_PASSWORD', isCorrect })
    }
}