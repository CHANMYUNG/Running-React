import React, { Component } from 'react';
import Movie from './Movie'
import './App.css';

class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: 'Matrix',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg'
          },
          {
            title: 'Iron Man',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg'
          },
          {
            title: 'The Avangers',
            poster: 'https://upload.wikimedia.org/wikipedia/ko/thumb/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg/250px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg'
          },
          {
            title: 'Old Boy',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg'
          },
          {
            title: 'Star Wars',
            poster: 'https://i.amz.mshcdn.com/O8rMOJtTmcjAJSkJtdbJUAC100g=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F675031%2Fbbb3432c-5253-4fa8-bb03-35b4d1b9ce23.jpg'
          }
        ]
      })
    }, 3000)
  }

  _renderMovies() {
    return this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting} <br/>
        {this.state.movies ? this._renderMovies() : 'loading! wait!'}
      </div>
    );
  }
}

export default App;
