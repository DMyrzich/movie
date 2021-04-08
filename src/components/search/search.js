import React from 'react';
import './search.css';

const Search = ({ search, bntsearch, searchText }) => {

    return (<nav className="transparent">
        <div className="nav-wrapper">
            <div className="input-field">
                <input onKeyDown={
                    (event) => {
                        if (event.key === 'Enter') {
                            bntsearch()
                        }
                    }
                } onBlur={() => bntsearch()} onChange={search} value={searchText} id="search" type="search" required maxLength="15" />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">
                    <span onClick={() => bntsearch()} className="material-icons-large blue darken-1" style={{ color: 'white', borderBlockColor: '#1e88e5', padding: 5, borderRadius: 15 }}>search</span></i>
            </div>
        </div >
    </nav >
    )
}

export default Search;