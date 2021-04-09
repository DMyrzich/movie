import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import CardItems from '../CardItem/CardItem';
import './Cardlist.css';

const CardList = ({ films, get, selectId, select }) => {

    return (
        <div>
            <div className="my-grid">
                {
                    films.map((data) => <CardItems key={data.imdbID.slice(2)} {...data} />)
                }
            </div>
            <Navigation get={get} selectId={selectId} select={select} />
        </div>
    )
}

export default CardList;