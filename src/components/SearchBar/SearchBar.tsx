import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  handleSearch: (term: string) => void;
  handleSort: () => void;
  handleClearSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ handleSearch, handleSort, handleClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  const handleSortClick = () => {
    handleSort();
  };

  const handleClearClick = () => {
    setSearchTerm('');
    handleClearSearch();
  };

  return (
    <nav className="container-fluid position-relative d-none d-lg-block bgc-505 rounded-top">
      <div className="row">
        <div className="col p-4">
          <div className="container-fluid">
            <div className="row p-row-sm">
              <div className="col">
                <form onSubmit={handleSubmit} className="d-flex align-items-center">
                  <input
                    type="text"
                    className="bg-transparent border-0 w-100 text-light pl-2 searchFormInput form-control-lg"
                    style={{ height: '59px' }}
                    name="text"
                    placeholder="Paieška..."
                    value={searchTerm}
                    onChange={handleChange}
                    onFocus={(e) => e.target.select()}
                  />
                  <button type="submit" className="btn btn-outline-dark border-0 bg-transparent searchFormSubmitBtn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <div className="col-12 col-sm-auto d-flex align-items-center mt-1 mt-sm-0">
                <button type="button" className="btn btn-dark btn-sm w-100 border-0 text-white-50" onClick={handleSortClick}>
                  Rūšiuoti pagal pavadinimą <i className="fa fa-sort-alpha-down text-muted" aria-hidden="true"></i>
                </button>
              </div>
              <div className="col-12 col-sm-auto d-flex align-items-center mt-1 mt-sm-0">
                <button type="button" className="btn btn-dark btn-sm w-100 border-0 text-white-50" onClick={handleClearClick}>
                  Išvalyti paiešką <i className="fa fa-times text-muted" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchSuggestMainDiv position-absolute bgc-row shadow d-none" style={{ left: '0', right: '0', zIndex: '1031', maxHeight: '396px', overflowY: 'auto' }}></div>
    </nav>
  );
};

export default SearchBar;