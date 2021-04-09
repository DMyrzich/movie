import React from 'react';
import './search.css';

const Search = ({ search, bntsearch, searchText }) => {

    return (<div class="row" style={{ margin: 0 }}>
        <div class="input-field col s6" style={{ width: '97%' }}>
            <i class="material-icons prefix">search</i>
            <input onKeyDown={
                (event) => {
                    if (event.key === 'Enter') {
                        bntsearch()
                    }
                }
            } onBlur={() => bntsearch()} onChange={search} value={searchText} required maxLength="15" />
            <i className="material-icons" style={{ position: 'absolute', top: '.5rem' }}>
                <span onClick={() => bntsearch()} className="material-icons-large blue darken-1"
                    style={{ color: 'white', borderBlockColor: '#1e88e5', padding: 10, cursor: 'pointer', borderRadius: 15 }}>search
                        </span>
            </i>
        </div>
    </div>)
}

export default Search;