import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/styles.module.scss";
import BackgroundColor from "../styles/background.module.scss";
import { baseUrl } from "../utils/Urls";
import Link from "next/link";
import GenresModal from "../GenresModal/GenresModal";
import AdvancedSearchModal, {
  AdvancedSearchFilters,
} from "../AdvancedSearchModal/AdvancedSearchModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

interface Movie {
  _id: string;
  film_name: string;
  film_image: string;
  release_date: string;
  film_trailer: string;
  imdbRating?: string;
  genre?: string;
}

interface FavoriteMovie {
  _id: string;
  film_name: string;
  film_favorite_image: string;
  release_date: string;
  film_trailer: string;
  age_rating: string;
  age_rating_image: string;
  imdbRating?: string;
}

interface State {
  movies: Movie[];
  favoriteMovies: FavoriteMovie[];
  defaultMovies: Movie[];
  clickedCardIndex: number | null;
  isLoading: boolean;
  searchTerm: string;
  selectedGenre: string;
  isGenresModalOpen: boolean;
  isAdvancedSearchModalOpen: boolean;
  isSearching: boolean;
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
      searchTerm: "",
      selectedGenre: "",
      isGenresModalOpen: false,
      isAdvancedSearchModalOpen: false,
      isSearching: false,
    };
  }

  genres: string[] = [
    "Veiksmo",
    "Animaciniai",
    "Komedija",
    "Drama",
    "Trileriai",
    "Nuotykiai",
    "Fantastiniai",
    "Romantiniai",
    "Dokumentika",
    "Šeimai",
    "Mistiniai",
    "Moksliniai",
    "Siaubo",
    "Biografiniai",
    "Kriminaliniai",
    "Muzika",
  ];

  componentDidMount() {
    this.fetchMovies();
    this.fetchFavoriteMovies();
  }

  fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get<{ favoriteMovies: FavoriteMovie[] }>(
        `${baseUrl}/favoritemovies`
      );
      const favoriteMoviesWithRatings = await Promise.all(
        response.data.favoriteMovies.map(async (movie) => {
          try {
            const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
            const omdbRes = await axios.get(
              `https://www.omdbapi.com/?t=${encodeURIComponent(
                movie.film_name
              )}&apikey=${apiKey}`
            );
            return {
              ...movie,
              imdbRating: omdbRes.data.imdbRating || null,
            };
          } catch {
            return {
              ...movie,
              imdbRating: null,
            };
          }
        })
      );
      this.setState({
        favoriteMovies: favoriteMoviesWithRatings,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching favorite movies:", error);
      this.setState({ isLoading: false });
    }
  };

  fetchMovies = async () => {
    try {
      const response = await axios.get<{ movies: Movie[] }>(
        `${baseUrl}/movies`
      );
      const moviesWithRatings = await Promise.all(
        response.data.movies.map(async (movie) => {
          try {
            const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
            const omdbRes = await axios.get(
              `https://www.omdbapi.com/?t=${encodeURIComponent(
                movie.film_name
              )}&apikey=${apiKey}`
            );
            return {
              ...movie,
              imdbRating: omdbRes.data.imdbRating || null,
              genre: omdbRes.data.Genre || "",
            };
          } catch {
            return {
              ...movie,
              imdbRating: null,
              genre: "",
            };
          }
        })
      );
      this.setState({
        movies: moviesWithRatings,
        defaultMovies: moviesWithRatings,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
      this.setState({ isLoading: false });
    }
  };

  handleSearch = () => {
    const { searchTerm, selectedGenre, defaultMovies } = this.state;

    const filtered = defaultMovies.filter((movie) => {
      const nameMatch = movie.film_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const genreMatch = selectedGenre
        ? movie.genre?.toLowerCase().includes(selectedGenre.toLowerCase())
        : true;
      return nameMatch && genreMatch;
    });

    this.setState({
      movies: filtered,
      isSearching: !!searchTerm || !!selectedGenre,
    });
  };

  toggleAdvancedSearchModal = () => {
    this.setState((prev) => ({
      isAdvancedSearchModalOpen: !prev.isAdvancedSearchModalOpen,
    }));
  };

  handleAdvancedSearch = (filters: AdvancedSearchFilters) => {
    const { keyword, yearFrom, yearTo, genre } = filters;
    const { defaultMovies } = this.state;

    const filtered = defaultMovies.filter((movie) => {
      const keywordLower = keyword.toLowerCase();
      const nameMatch = movie.film_name.toLowerCase().includes(keywordLower);

      const genreField = movie.genre?.toLowerCase() || "";
      const genreMatch = genre
        ? genreField.includes(genre.toLowerCase())
        : true;

      const notSeriesOrAnime =
        !genreField.includes("tv") &&
        !genreField.includes("anime") &&
        !genreField.includes("series") &&
        !genreField.includes("show");

      const movieYear = movie.release_date
        ? parseInt(movie.release_date.slice(0, 4))
        : null;

      let yearMatch = true;

      if (movieYear !== null) {
        const from = yearFrom ? parseInt(yearFrom) : null;
        const to = yearTo ? parseInt(yearTo) : null;

        if (from !== null && to !== null) {
          yearMatch = movieYear >= from && movieYear <= to;
        } else if (from !== null) {
          yearMatch = movieYear >= from;
        } else if (to !== null) {
          yearMatch = movieYear <= to;
        }
      }

      return nameMatch && genreMatch && notSeriesOrAnime && yearMatch;
    });

    this.setState({
      movies: filtered,
      isAdvancedSearchModalOpen: false,
      isSearching: true,
      searchTerm: keyword,
      selectedGenre: genre,
    });
  };

  handleClearSearch = () => {
    this.setState({
      movies: this.state.defaultMovies,
      searchTerm: "",
      selectedGenre: "",
      isSearching: false,
    });
  };

  handleSort = () => {
    const sorted = [...this.state.movies].sort((a, b) =>
      a.film_name.localeCompare(b.film_name)
    );
    this.setState({ movies: sorted });
  };

  handleCardClick = (index: number) => {
    this.setState({ clickedCardIndex: index });
  };

  toggleGenresModal = () => {
    this.setState((prev) => ({ isGenresModalOpen: !prev.isGenresModalOpen }));
  };

  handleSelectGenreFromModal = (genre: string) => {
    this.setState(
      { selectedGenre: genre, isGenresModalOpen: false },
      this.handleSearch
    );
  };

  render() {
    const {
      movies,
      favoriteMovies,
      clickedCardIndex,
      isLoading,
      searchTerm,
      selectedGenre,
      isGenresModalOpen,
      isSearching,
      isAdvancedSearchModalOpen,
    } = this.state;

    const filteredFavoriteMovies = favoriteMovies
      .filter(
        (movie) =>
          movie.film_favorite_image && movie.film_favorite_image.trim() !== ""
      )
      .slice(0, 6);

    return (
      <Container
        fluid
        className={`bgc-dark-2 ${isLoading ? "" : "loaded-background"}`}
      >
        {/* 🔍 Search Bar Section */}
        <div
          className="bg-[#0e0e0e] py-4 px-3 mt-5 rounded-md"
          style={{ maxWidth: "2000px", margin: "0 auto" }}
        >
          <div className="pb-4">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSearch();
              }}
            >
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center bg-neutral-800 px-4 py-2 rounded-md border border-neutral-700 flex-grow w-full md:w-auto">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-neutral-400 mr-3 cursor-pointer hover:text-white"
                    onClick={this.handleSearch}
                    title="Ieškoti"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Ieškoti filmų..."
                    className="bg-transparent text-white placeholder-neutral-500 border-0 focus:ring-0 focus:outline-none w-full"
                    value={searchTerm}
                    onChange={(e) =>
                      this.setState({ searchTerm: e.target.value })
                    }
                  />
                </div>

                <Button
                  variant="outline-light"
                  size="sm"
                  className="bg-neutral-800 border-neutral-600 hover:bg-neutral-700 text-white"
                  onClick={this.toggleGenresModal}
                >
                  Pasirinkti žanrą
                </Button>

                <Button
                  variant="outline-light"
                  size="sm"
                  className="bg-neutral-800 border-neutral-600 hover:bg-neutral-700 text-white"
                  onClick={this.toggleAdvancedSearchModal}
                >
                  Išplėstinė paieška
                </Button>

                {selectedGenre && (
                  <span className="text-white ml-2">
                    Pasirinktas: <strong>{selectedGenre}</strong>
                  </span>
                )}

                {(searchTerm || selectedGenre) && (
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="bg-red-600 border-neutral-600 hover:bg-red-700 text-white ml-2"
                    onClick={this.handleClearSearch}
                  >
                    Išvalyti paiešką
                  </Button>
                )}
              </div>
            </Form>

            <div className="text-sm text-neutral-400 mt-3">
              <span className="font-semibold text-white">PAIEŠKA</span> iš viso{" "}
              <span className="bg-neutral-800 px-2 py-1 rounded text-white">
                {movies.length}
              </span>
            </div>
          </div>
        </div>

        {!isSearching && (
          <div className={`${BackgroundColor.favoriteBackground} py-4 mb-4`}>
            <h3 className="text-light mb-4 px-3">Favorite Movies</h3>
            <Row className="justify-content-center">
              {filteredFavoriteMovies.map((movie, index) => (
                <Col
                  key={movie._id}
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  className={`backdrop-shortnews-item ${BackgroundColor.fadeIn}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Link href={`/favoriteMovies/${movie._id}`} className="w-100">
                    <img
                      src={movie.film_favorite_image}
                      alt={movie.film_name}
                      className="backdrop-shortnews-img rounded"
                      loading="lazy"
                    />
                    <div className="backdrop-shortnews-overlay rounded" />
                    <div className="backdrop-shortnews-name text-white no-underline">
                      {movie.film_name}
                    </div>
                    <div className="backdrop-shortnews-date text-white no-underline">
                      {movie.release_date}
                    </div>
                    <div className="backdrop-shortnews-date text-white flex items-center justify-center  gap-1 no-underline">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400"
                      />
                      IMDb: {movie.imdbRating || "N/A"}
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* 🎬 Movies List */}
        <Row className="g-3">
          {movies.map((movie, index) => (
            <Col
              key={movie._id}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className={`backdrop-shortnews-item ${BackgroundColor.fadeIn}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => this.handleCardClick(index)}
            >
              <Link href={`/i/${movie._id}`} className="w-100 no-underline">
                <img
                  src={movie.film_image}
                  alt={movie.film_name}
                  className={`backdrop-shortnews-img rounded ${
                    clickedCardIndex === index ? styles.cardClicked : ""
                  }`}
                  loading="lazy"
                />
                <div className="backdrop-shortnews-overlay rounded" />
                <div className=" text-white  flex items-center justify-center no-underline">
                  {movie.film_name}
                </div>
                <div className="backdrop-shortnews-date text-white  flex items-center justify-center no-underline">
                  {movie.release_date}
                </div>

                <div className="backdrop-shortnews-date text-white flex items-center justify-center gap-1 no-underline">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  IMDb: {movie.imdbRating || "N/A"}
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        <GenresModal
          show={isGenresModalOpen}
          genres={this.genres}
          onHide={() => this.setState({ isGenresModalOpen: false })}
          onSelectGenre={this.handleSelectGenreFromModal}
        />

        <AdvancedSearchModal
          show={isAdvancedSearchModalOpen}
          onHide={() => this.setState({ isAdvancedSearchModalOpen: false })}
          onSearch={this.handleAdvancedSearch}
        />
      </Container>
    );
  }
}

export default Movies;
