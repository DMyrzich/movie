import React from 'react';
import './CardInfo.css'
import Loader from '../../components/Loader/loader'
import { withRouter } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

class CardInfo extends React.Component {

    state = {
        info: [],
        loading: true,
        errror: null,
    }

    componentDidMount() {

        fetch(`https://www.omdbapi.com/?i=${this.props.imdbID}&apikey=${API_KEY}`)
            .then((date) => date.json())
            .then((date) => this.setState({ info: date, loading: false }))
            .catch((error) => this.setState({ info: [], errror: error, loading: false }))
    }

    render() {

        const { Title, Type, Poster, Genre, Runtime, Released, Plot, Country, Awards } = this.state.info;
        const { history } = this.props;

        return this.state.loading ? <Loader /> : (<div className="card info">

            <a onClick={() => history.goBack() } className="btn-floating btn-large blue darken-1"><i className="material-icons">arrow_back</i></a>
            <div>
                <img className="activator" alt={Title} src={Poster} />
            </div>
            <div>
                <h1 style={{ margin: 0, paddingBottom: 20 }}>{Title}</h1>
                <div style={{ paddingTop: 15, textAlign: 'left' }}>
                    <span style={{ paddingTop: 7, fontWeight: 'bold' }}>Released: </span>
                    <span>{Released}</span>
                </div>
                <div style={{ paddingTop: 7, textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Genre: </span>
                    <span>{Genre}</span>
                </div>
                <div style={{ paddingTop: 7, textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Runtime: </span>
                    <span>{Runtime}</span>
                </div>
                <div style={{ paddingTop: 7, textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Type: </span>
                    <span>{Type}</span>
                </div>
                <div style={{ paddingTop: 7, textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Plot: </span>
                    <span>{Plot}</span>
                </div>
                <div style={{ paddingTop: 7, textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Country: </span>
                    <span>{Country}</span>
                </div>
                <div style={{ paddingTop: 7, textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>Awards: </span>
                    <span>{Awards}</span>
                </div>
            </div>
        </div >)
    }

}

export default withRouter(CardInfo);