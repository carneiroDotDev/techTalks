/**
|--------------------------------------------------
| All of our interfaces
|--------------------------------------------------
*/

export interface IState {
    News: INew[]
    favourites: INew[]
}

export interface IAction {
    type: string
    payload: INew[] | [] | any
}

export interface INew {
    headline: string
    id: string
    imageUrl: string
    origin: string
    publishedAt: string
    subHeadline: string
    tags: any
    type: string
    url: string
}

export type Dispatch = React.Dispatch<IAction>

export interface INewProps {
    news: INew[]
    store: { state: IState; dispatch: any }
    toggleFavAction: (state: IState, dispatch: IAction, oneNew: INew) => IAction
    favourites: INew[]
}
