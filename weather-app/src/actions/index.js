export const typeQuery = (query) => ({
    type: "TYPE_QUERY",
    payload: query
})
export const fetchWeatherAction = (url) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            let resp = await fetch(url)
            let weather1 = await resp.json()
            console.log(weather1)
            if (resp.ok) {
                let weather = await resp.json()
                console.log(weather)
                dispatch({
                    type: 'GET_WEATHER',
                    payload: weather,
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: false,
                })
            } else {

                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }

    }
}