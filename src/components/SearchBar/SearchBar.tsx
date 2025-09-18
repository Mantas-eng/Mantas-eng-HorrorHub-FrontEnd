import React, { useState, FormEvent, ChangeEvent } from 'react';

interface Props {
  handleSearch: (term: string, category: string, language: string) => void;
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('movie');
  const [language, setLanguage] = useState('lt');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm, category, language);
  };

  return (
    <div className="bg-black w-full py-6 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-neutral-900 px-6 py-4 rounded-md border-b border-lime-500"
      >
        {/* Search Input */}
        <div className="flex flex-grow items-center bg-neutral-800 px-4 py-2 rounded-md border border-neutral-700 w-full">
          <i className="fa fa-search text-neutral-400 mr-3" />
          <input
            type="text"
            placeholder="paieška..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white placeholder-neutral-500 focus:outline-none w-full"
          />
        </div>

        {/* Žanrai ir Išplėstinė paieška */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-neutral-800 text-neutral-300 text-sm px-3 py-2 rounded-md hover:bg-neutral-700"
          >
            Žanrai <i className="fa fa-cog ml-1" />
          </button>
          <button
            type="button"
            className="bg-neutral-800 text-neutral-300 text-sm px-3 py-2 rounded-md hover:bg-neutral-700"
          >
            Išplėstinė paieška <i className="fa fa-cog ml-1" />
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-neutral-800 text-white text-sm px-4 py-2 rounded-md hover:bg-neutral-700"
        >
          naujausiai įkelti
        </button>
      </form>

      {/* Rezultatų info */}
      <div className="text-sm text-neutral-400 mt-4 px-2">
        <span className="font-semibold text-white">PAIEŠKA</span> iš viso <span className="bg-neutral-800 px-2 py-1 rounded text-white">15,059</span>
      </div>
    </div>
  );
};

export default SearchBar;
