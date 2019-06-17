import React from 'react'
import { INew } from './interfaces'

export default function NewsList(props: any): JSX.Element[] {
    const { news, toggleFavAction, favourites, store } = props

    const { state, dispatch } = store
    return news.map((oneNew: INew) => {
        if (oneNew.imageUrl) {
            return (
                <section key={oneNew.id} className="oneNewBox">
                    <div className="newCard">
                      <img className="imgStyle" src={oneNew.imageUrl} alt={`Rick and Morty ${oneNew.headline}`} />
                    <div>{oneNew.headline}</div>
                    <section style={{ display: 'flex', justifyContent: 'space-between', margin: '5px'}}>
                        <div>{oneNew.subHeadline}</div>
                    </section>
                    <button type="button" onClick={() => toggleFavAction(state, dispatch, oneNew)}>
                        {favourites.includes(oneNew) ? 'Unfavourite' : 'Favourite'}
                    </button>
                    </div>
                </section>
            )
        } else {
            return null
        }
    })
}
