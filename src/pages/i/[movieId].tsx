import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { baseUrl } from '@/components/utils/Urls';
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from '@/components/styles/cover.module.scss';
import Link from 'next/link';

interface Movie {
  _id: string;
  film_name: string;
  film_image: string;
  release_date: string;
  film_trailer: string;
  description: string;
  film_cover: string;
}

const MovieDetail: React.FC = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [defaultMovies, setDefaultMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (movieId) {
      axios.get<{ movie: Movie }>(`${baseUrl}/movies/${movieId}`)
        .then(response => {
          setMovie(response.data.movie);
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    
  }, [movieId]);

  const handleSearch = (searchTerm: string) => {
    const filteredMovies = defaultMovies.filter(movie =>
      movie.film_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovie(filteredMovies[0]);
  };

  const handleSort = () => {
    const sortedMovies = [...defaultMovies].sort((a, b) => a.film_name.localeCompare(b.film_name));
    setDefaultMovies(sortedMovies);
    setMovie(sortedMovies[0]);
  };

  const handleClearSearch = () => {
    setMovie(defaultMovies[0]);
  };

  return (
    <>
      <div className="mt-5">
        <Navbar />
        <SearchBar
          handleSearch={handleSearch}
          handleSort={handleSort}
          handleClearSearch={handleClearSearch}
        />
      </div>
      <Container className="movie-detail">
        <Row>
          <Col>
            <div className="mt-2">
              <SearchBar
                handleSearch={handleSearch}
                handleSort={handleSort}
                handleClearSearch={handleClearSearch}
              />
            </div>
          </Col>
        </Row>
        <Row className="p-row-sm pt-3 pb-1 justify-content-center">
          {loading && <p>Loading...</p>}
          {movie && (
            <Col className={`${styles.image} col-6 col-sm-4 col-lg-2 mb-4 backdrop-shortnews-item`}>
              <img src={movie.film_cover} className={`${styles.image}card-img-top img-fluid`} alt={movie.film_name} />
              <div className="row align-items-start d-flex">
                <div className={`${styles.films}`}>
                  <img src={movie.film_image} className="" alt={movie.film_name} />
                  <button type="button" className="align-top m-4 btn btn-success">IMDB</button>
                  <button className="btn btn-dark  border-0 bgc-dark-2 px-3  btn-sm text-white-50 mt-1 mr-1 text-nowrap py-2 py-sm-1" type="button" data-toggle="collapse" data-target="#collapseAbout" data-parent="#coll-group-fs-01" aria-expanded="true" aria-controls="collapseAbout">Aprašymas <i className="fa fa-check text-green ml-1"></i></button>
                  <button className="btn btn-dark  border-0 bgc-dark-2 px-3  btn-sm text-white-50 collapsed mt-1 mr-1 text-nowrap py-2 py-sm-1" type="button" data-toggle="collapse" data-target="#collapseCom" data-parent="#coll-group-fs-01" aria-expanded="false" aria-controls="collapseCom">Komentarai</button>
                  <Link className="btn btn-dark  border-0 bgc-dark-2 px-3  btn-sm text-white-50 collapsed mt-1 mr-1 text-nowrap py-2 py-sm-1" href="https://www.youtube.com/watch?v=N57xF8X2iCM" data-lity="">Anonsas <i className="fa fa-check text-green ml-1"></i></Link>
                  <button className="btn btn-dark  border-0 bgc-dark-2 px-3  btn-sm text-white-50 collapsed mt-1 mr-1 text-nowrap py-2 py-sm-1" type="button" data-toggle="collapse" data-target="#collapseRelated" data-parent="#coll-group-fs-01" aria-expanded="false" aria-controls="collapseRelated">Panašūs <i className="fa fa-check text-green ml-1"></i></button>
                  <button className="btn btn-dark  border-0 bgc-dark-2 px-3  btn-sm text-white-50 collapsed mt-1 mr-1 text-nowrap py-2 py-sm-1" type="button" data-toggle="collapse" data-target="#collapseCast" data-parent="#coll-group-fs-01" aria-expanded="false" aria-controls="collapseCast">Aktoriai <i className="fa fa-check text-green ml-1"></i></button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MovieDetail;
