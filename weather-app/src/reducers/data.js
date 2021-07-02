import { initialState } from "../store";

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TYPE_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.payload,
            }

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state
    }
}

export default dataReducer