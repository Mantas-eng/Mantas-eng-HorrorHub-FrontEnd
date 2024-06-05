import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import styles from '../styles/styles.module.scss';
import { baseUrl } from '../Urls'; 

interface Movie {
  _id: string;
  film_name: string;
  film_image: string;
  release_date: string;
  film_trailer: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [defaultMovies, setDefaultMovies] = useState<Movie[]>([]);
  const [clickedCardIndex, setClickedCardIndex] = useState<number | null>(null);

  useEffect(() => {
    axios.get<{ movies: Movie[] }>(`${baseUrl}/movies`) 
      .then(response => {
        setMovies(response.data.movies);
        setDefaultMovies(response.data.movies);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filteredMovies = defaultMovies.filter(movie =>
      movie.film_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleSort = () => {
    const sortedMovies = [...movies].sort((a, b) => a.film_name.localeCompare(b.film_name));
    setMovies(sortedMovies);
  };

  const handleClearSearch = () => {
    setMovies(defaultMovies);
  };

  const handleCardClick = (index: number) => {
    setClickedCardIndex(index);
  };

  return (
    <Container>
      <SearchBar
        handleSearch={handleSearch}
        handleSort={handleSort}
        handleClearSearch={handleClearSearch}
      />
      <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
        {movies.map((movie, index) => (
          <Col key={movie._id} className={`mb-4 animated fadeIn delay-${index + 1}s`} onClick={() => handleCardClick(index)}>
            <div className={`card ${styles.card} ${styles.animated} ${styles.fadeIn} ${styles.delay}-${index + 1}s`} style={{ position: 'relative' }}>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;