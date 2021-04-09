import React, { Component } from 'react';
import './App.css';
import Heder from './components/Heder/Heder';
import Footer from './components/Footer/Footer';
import Search from './components/search/search';
import CardList from './card/card-list/card-list';
import Loader from './components/Loader/loader';
import Emprety from './components/emprety/emprety';
import Filter from './components/Filter/Filter';
import Navigation from './components/Navigation/Navigation';
import CardInfo from './card/CardInfo/CardInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {

  state = {  
    films: [],
    searchText: '',
    loading: false,
    errror: null,
    filters: ''
  }

  serht = (event) => {

    this.setState({ searchText: event.target.value })
  }

  GetMovie = () => {

    let { searchText } = this.state;
    if (!searchText) {
      searchText = 'man';
    }
    fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}&type=${this.state.filters}`)
      .then((date) => date.json())
      .then((date) => this.setState({ films: date.Search, loading: false }))
      .catch((error) => this.setState({ films: [], errror: error, loading: false }))
  }

  GetFiltr = (event) => {

    this.setState({ filters: event.target.value }, () => this.GetMovie())
  }

  componentDidMount() {

    this.GetMovie();
  }

  render() {

    const { films, loading } = this.state;

    return (
      <div className="App" >
        <BrowserRouter>
          <Heder />
          <Switch>

            <Route path="/movie/" exact render={() => {
              return (
                <>
                  <Search search={this.serht} bntsearch={this.GetMovie} searchText={this.state.searchText} />
                  <Filter filtr={this.GetFiltr} />
                  {
                    loading ? <Loader /> : films && films.length > 0 ? <CardList films={films} /> : <Emprety />
                  }
                  <Navigation />
                </>)
            }} />
            <Route path="/movie/:id?" render={({ match }) => <CardInfo imdbID={match.params.id} />} />
            <Route render={() => <div></div>} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
