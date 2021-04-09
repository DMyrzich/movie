import React from 'react'; 
import CardItems from '../CardItem/CardItem';
import './Cardlist.css';

const CardList = ({ films }) => {

    return (
        <div className="my-grid">
            {
                films.map((data) => <CardItems key={data.imdbID.slice(2)} {...data} />)
            }
        </div>
    )
}

export default CardList;