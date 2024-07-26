import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { baseUrl } from '@/components/utils/Urls';
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from '@/components/styles/cover.module.scss';
import Link from 'next/link';

const MovieDetail: React.FC = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, setMovie] = useState(null);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      axios.get(`${baseUrl}/movies/${movieId}`)
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

  const handleSearch = (searchTerm) => {
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
              <img src={movie.film_cover} className={`${styles.image} card-img-top img-fluid`} alt={movie.film_name} />
              <div className="row align-items-start d-flex">
                <div className={styles.films}>
                  <img src={movie.film_image} alt={movie.film_name} />
                  <button type="button" className="btn btn-success m-5 ">IMDB</button>
                  <div>
                    <span className='small mb-1 mb-xl-0 mr-2'>
                    <Link href={'/movie/biography"'} className="text-white-50">Biografiniai</Link>
                    <Link href={'/movie/biography"'} className="text-white-50">drama</Link>
                    <Link href={'/movie/biography"'} className="text-white-50">sport</Link>
                    </span>
                  </div>
                  <div className={`${styles.container} button-container justify-content-center mx-auto gap-2 align-items-center`}>
                    <div className={`${styles.red} p-2 d-flex gap-2 col-lg-4`}>
                    <button className="btn btn-dark border-0 bgc-dark-2 px-3 btn-sm text-white-50" type="button" data-toggle="collapse" data-target="#collapseAbout" data-parent="#coll-group-fs-01" aria-expanded="true" aria-controls="collapseAbout">Aprašymas <i className="fa fa-check text-green ml-1">
                      </i></button>
                    <button className="btn btn-dark border-0 bgc-dark-2 px-3 btn-sm text-white-50 collapsed" type="button" data-toggle="collapse" data-target="#collapseCom" data-parent="#coll-group-fs-01" aria-expanded="false" aria-controls="collapseCom">Komentarai</button>
                    <Link className="btn btn-dark border-0 bgc-dark-2 px-3 btn-sm text-white-50 collapsed" href="https://www.youtube.com/watch?v=N57xF8X2iCM" data-lity="">Anonsas <i className="fa fa-check text-green ml-1"></i></Link>
                    <button className="btn btn-dark border-0 bgc-dark-2 px-3 btn-sm text-white-50 collapsed" type="button" data-toggle="collapse" data-target="#collapseRelated" data-parent="#coll-group-fs-01" aria-expanded="false" aria-controls="collapseRelated">Panašūs <i className="fa fa-check text-green ml-1"></i></button>
                    <button className="btn btn-dark border-0 bgc-dark-2 px-3 btn-sm text-white-50 collapsed" type="button" data-toggle="collapse" data-target="#collapseCast" data-parent="#coll-group-fs-01" aria-expanded="false" aria-controls="collapseCast">Aktoriai <i className="fa fa-check text-green ml-1"></i></button>
                  </div>
                  
                </div>
                <p className="news-id-28077 m-0 py-2 text-justify text-white-50">Šiame pasaulyje beveik visi turi kažkokias galias - skraidyti, pasiversti nematomu, naudoti ugnį ir t.t. Taip pat yra ir Juei akademija, kur priimami moksleiviai mokomi tapti herojais. Pagrindinis veikėjas Izuku nuo pat mažumės stebėjo savo mėgstamiausią herojų ir norėjo tapti vienu iš jų, tačiau jo vaikystė gana niūri - jis tapdavo pajuokų objektu, o ir dažnai buvo mušamas, negana to berniukas sužino, kad neturi jokių galių. Tačiau kaip pasikeis jo gyvenimas susitikus su pačiu geriausiu herojumi?</p>

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
