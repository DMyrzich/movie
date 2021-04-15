import React, { Component } from 'react';
import './App.css';
import Heder from './components/Heder/Heder';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import CardList from './Card/Cardlist/Cardlist';
import Loader from './components/Loader/loader';
import Emprety from './components/Emprety/Emprety';
import Filter from './components/Filter/Filter';
import CardInfo from './Card/CardInfo/CardInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {

  state = {
    films: [],
    searchText: '',
    loading: false,
    errror: null,
    filters: '',
    selectId: 1,
  }

  serht = (event) => {

    this.setState({ searchText: event.target.value })
  }

  GetMovie = (page) => {

    let { searchText } = this.state;

    if (!searchText || searchText.length < 0) {
      searchText = 'man';
    }

    fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}&type=${this.state.filters}&page=${page}`)
      .then((date) => date.json())
      .then((date) => this.setState({ films: date.Search, loading: false }))
      .catch((error) => this.setState({ films: [], errror: error, loading: false }))
  }

  select = (id) => {

    this.setState({ selectId: id }, () => this.GetMovie(id));
  }

  GetFiltr = (event) => {

    this.setState({ filters: event.target.value }, () => this.GetMovie(2))
  }

  componentDidMount() {

    this.GetMovie(1);
  }

  render() {

    const { films, loading } = this.state;

    return (
      <div className="App" >
        <BrowserRouter>
          <Heder />
          <Switch>

            <Route path="/movie/page/:id?" exact render={() => {
              return (
                <>
                  <Search search={this.serht} bntsearch={this.GetMovie} searchText={this.state.searchText} />
                  <Filter filtr={this.GetFiltr} />
                  {
                    loading ? <Loader /> : films && films.length > 0 ?
                      <CardList
                        films={films}
                        get={this.GetMovie}
                        selectId={this.state.selectId}
                        select={this.select}
                      /> : <Emprety />
                  }
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
