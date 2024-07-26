import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import styles from '../styles/styles.module.scss';
import BackgroundColor from '@/components/styles/background.module.scss';
import { baseUrl } from '../utils/Urls';
import Link from 'next/link';

interface Movie {
  _id: string;
  film_name: string;
  film_image: string;
  release_date: string;
  film_trailer: string;
}

interface FavoriteMovie {
  _id: string;
  film_name: string;
  film_favorite_image: string;
  release_date: string;
  film_trailer: string;
  age_rating: string;
  age_rating_image: string;
}

interface State {
  movies: Movie[];
  favoriteMovies: FavoriteMovie[];
  defaultMovies: Movie[];
  clickedCardIndex: number | null;
  isLoading: boolean;
}

class Movies extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      movies: [],
      favoriteMovies: [],
      defaultMovies: [],
      clickedCardIndex: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
    this.fetchFavoriteMovies();
  }

  fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get<{ favoriteMovies: FavoriteMovie[] }>(`${baseUrl}/favoritemovies`);
      this.setState({ favoriteMovies: response.data.favoriteMovies, isLoading: false });
    } catch (error) {
      console.error('Error fetching favorite movies:', error);
      this.setState({ isLoading: false });
    }
  };

  fetchMovies = async () => {
    try {
      const response = await axios.get<{ movies: Movie[] }>(`${baseUrl}/movies`);
      this.setState({ movies: response.data.movies, defaultMovies: response.data.movies, isLoading: false });
    } catch (error) {
      console.error('Error fetching movies:', error);
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (searchTerm: string) => {
    const filteredMovies = this.state.defaultMovies.filter(movie =>
      movie.film_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ movies: filteredMovies });
  };

  handleSort = () => {
    const sortedMovies = [...this.state.movies].sort((a, b) => a.film_name.localeCompare(b.film_name));
    this.setState({ movies: sortedMovies });
  };

  handleClearSearch = () => {
    this.setState({ movies: this.state.defaultMovies });
  };

  handleCardClick = (index: number) => {
    this.setState({ clickedCardIndex: index });
  };

  render() {
    const { movies, favoriteMovies, clickedCardIndex, isLoading } = this.state;

    return (
      <Container fluid className={`bgc-dark-2 ${isLoading ? '' : 'loaded-background'}`}>
        <Row className="p-row-sm pt-3 pb-1 justify-content-center" style={{ backgroundColor: "#ACE1AF" }}>
          {favoriteMovies.map((movie, index) => (
            <Col key={movie._id} className={`${BackgroundColor} bg col-6 col-sm-4 col-lg-2 mb-2 backdrop-shortnews-item`}>
              <Link href={`/favoriteMovies/${movie._id}`} className="text-decoration-none">
                <div className="card border-0 bg-transparent">
                  <div className="position-relative">
                    <img
                      className="card-img-top rounded shadow lazyloaded"
                      src={movie.film_favorite_image}
                      alt={movie.film_name}
                    />
                    {clickedCardIndex === index && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay" style={{ zIndex: 1 }}></div>
                    )}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay" style={{ zIndex: 1 }}></div>
                    <div className="position-absolute fixed-top pt-2 pl-2 d-flex" style={{ zIndex: 0 }}>
                    </div>
                    <div className="position-absolute fixed-bottom text-warning text-right pb-2 pr-2" style={{ zIndex: 0 }}>
                      <div className="d-inline bg-dark-tr px-2 py-1 rounded">
                        {movie.release_date} <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-1 pt-2 pb-0">
                    <div className="card-title small text-light text-truncate m-0">{movie.film_name} <span className="text-white-50">{movie.release_date}</span></div>
                    <div className="card-title small text-white-50 m-0"></div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        <SearchBar
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          handleClearSearch={this.handleClearSearch}
        />
        <Row className="justify-content-center">
          {movies.map((movie, index) => (
            <Col key={movie._id} xs={12} sm={6} md={4} lg={3} className={`backdrop-shortnews-item mb-4 animated fadeIn delay-${index + 1}s`} onClick={() => this.handleCardClick(index)}>
              <Link href={`/i/${movie._id}`} className="text-decoration-none">
                <div className={`card ${styles.card} ${clickedCardIndex === index ? 'bg-overlay' : ''}`} style={{ position: 'relative' }}>
                  <img src={movie.film_image} className="card-img-top" alt={movie.film_name} />
                  {clickedCardIndex === index && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay" style={{ zIndex: 1 }}></div>
                  )}
                  <div className="card-body bg-dark">
                    <h5 className="card-title text-light">{movie.film_name}</h5>
                    <p className="card-text text-light">{movie.release_date}</p>
                    <a href={movie.film_trailer} className="btn btn-secondary">Watch Trailer</a>
                    <a href={movie.film_trailer} className={`${styles.cardbtn} btn btn-secondary m-2`}>Watch Movie</a>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Movies;
