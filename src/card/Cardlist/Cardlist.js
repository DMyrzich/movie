import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import CardItems from '../CardItem/CardItem';
import './Cardlist.css';

const CardList = ({ films }) => {

    return (
        <div>
            <div className="my-grid">
                {
                    films.map((data) => <CardItems key={data.imdbID.slice(2)} {...data} />)
                }
            </div>
            <Navigation />
        </div>
    )
}

export default CardList;