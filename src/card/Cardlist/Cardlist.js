import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import CardItems from '../CardItem/CardItem';
import './Cardlist.css';

const CardList = ({ films, get, selectId, select }) => {
 
    return (
        <div>
            <div className="my-grid">
                {
                    films.map((data, idx) => <CardItems key={idx} {...data} />)
                }
            </div>
            <Navigation get={get} selectId={selectId} select={select} />
        </div>
    )
}

export default CardList;