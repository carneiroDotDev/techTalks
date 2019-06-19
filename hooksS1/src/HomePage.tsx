import React from 'react'
import { Store } from './Store'
import './index.css'
import { fetchDataAction, toggleFavAction } from './Actions'
import { INewProps } from './interfaces'

const NewsList = React.lazy<any>(() => import('./NewsList'))

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store)

    React.useEffect(() => {
        state.News.length === 0 && fetchDataAction(dispatch)
        console.log('useEffect')
    })

    const props: INewProps = {
        news: state.News,
        toggleFavAction,
        favourites: state.favourites,
        store: { state, dispatch },
    }

    return (
        <React.Suspense fallback={<div> Loadding ... </div>}>
            <section className="oneNewLayout">
                <NewsList {...props} />
            </section>
        </React.Suspense>
    )
}
