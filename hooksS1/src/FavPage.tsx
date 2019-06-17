import React from 'react'
import { Store } from './Store'
import { INewProps } from './interfaces'
import { toggleFavAction } from './Actions'

const NewsList = React.lazy<any>(() => import('./NewsList'))

export default function FavPage(): JSX.Element {
    const { state, dispatch } = React.useContext(Store)

    const props: INewProps = {
        news: state.favourites,
        toggleFavAction,
        favourites: state.favourites,
        store: { state, dispatch },
    }

    return (
        <React.Suspense fallback={<div> Loadding ... </div>}>
            <div className="oneNewLayout">
                <NewsList {...props} />
            </div>
        </React.Suspense>
    )
}
