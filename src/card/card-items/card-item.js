import React from 'react';
import './card-item.css'

const CardItem = (props) => {

    const { Title, Type, Poster } = props;

    return (<div className="card widht">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt={Title} src={Poster} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Type}</p>
            <p><a href="!#">This is a link</a></p>
        </div>
    </div >)
}

export default CardItem;