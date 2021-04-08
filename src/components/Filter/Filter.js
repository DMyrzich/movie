import React from 'react';
import './Filter.css'

const Filter = ({ filtr }) => {

    return (<div className="filter transparent">
        <p>
            <label>
                <input onChange={filtr} className="with-gap" name="filtr" value="" type="radio" defaultChecked />
                <span>Все фильмы</span>
            </label>
        </p>
        <p>
            <label>
                <input onChange={filtr} className="with-gap" name="filtr" value="movie" type="radio" />
                <span style={{ color: 'Red!important' }}>Только фильмы</span>
            </label>
        </p>
        <p>
            <label>
                <input onChange={filtr} className="with-gap" name="filtr" value="series" type="radio" />
                <span>Только сериалы</span>
            </label>
        </p>
    </div>)
}

export default Filter;

