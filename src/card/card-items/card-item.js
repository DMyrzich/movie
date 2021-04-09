import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './card-item.css'

const CardItem = (props) => {

    const { Title, Type, Poster, imdbID } = props;

    return (<Link to={imdbID} className="card widht">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt={Title} src={Poster} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Type}</p>
        </div>
    </Link >)
}

export default withRouter(CardItem);