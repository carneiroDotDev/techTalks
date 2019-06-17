import { IAction, INew, IState } from './interfaces'

export const fetchDataAction = async (dispatch: any) => {
    const data = await fetch('https://api.imfootball.io/news/index?langId=de&page=1')
    const dataJSON = await data.json()
    console.log('data -', dataJSON)
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON,
    })
}

export const toggleFavAction = (state: IState, dispatch: any, oneNew: INew): IAction => {
    const oneNewInFav: boolean = state.favourites.includes(oneNew)
    console.log(oneNewInFav)

    let dispatchObj = {
        type: 'ADD_FAV',
        payload: oneNew,
    }

    if (oneNewInFav) {
        const favWithoutNews: any = state.favourites.filter((fav: INew) => fav.id !== oneNew.id)

        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutNews,
        }
    }

    return dispatch(dispatchObj)
}
