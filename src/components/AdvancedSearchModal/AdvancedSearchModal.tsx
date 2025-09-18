import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type AdvancedSearchFilters = {
  keyword: string;
  category: string;
  genre: string;
  yearFrom?: string;
  yearTo?: string;
  language: string;
  subtitles: string;
};

type AdvancedSearchModalProps = {
  show: boolean;
  onHide: () => void;
  onSearch: (filters: AdvancedSearchFilters) => void;
};

const categories = ['Filmai', 'Serialai', 'TV laidos', 'Anime'];
const genres = [
  'Animaciniai', 'Biografiniai', 'Dokumentika', 'Drama', 'Fantastiniai',
  'Film-Noir', 'Istoriniai', 'Kariniai', 'Vaikiški', 'Komedijos', 'Kriminaliniai',
  'Mistiniai', 'Moksliniai', 'Muzika', 'Muzikiniai', 'Naujienos', 'Nuotykiai',
  'Pokalbiai', 'Politika', 'Realybės šou', 'Romantiniai', 'Siaubo', 'Sportas',
  'Šeimai', 'Telenovelės', 'Trileriai', 'Trumpi', 'Veiksmo', 'Vesterna', 'Žaidimai',
];

const yearOptions = [
  { label: '2025', from: '2025', to: '2025' },
  { label: '2020–2025', from: '2020', to: '2025' },
  { label: '2010–2020', from: '2010', to: '2020' },
  { label: '2000–2010', from: '2000', to: '2010' },
  { label: '1990–2000', from: '1990', to: '2000' },
  { label: '1980–1990', from: '1980', to: '1990' },
  { label: '1970–1980', from: '1970', to: '1980' },
  { label: 'iki 1970', from: '1900', to: '1970' },
];

const languages = ['Lietuvių', 'Anglų', 'Rusų', 'Be kalbos'];
const subtitles = ['Lietuviški', 'Angliški', 'Rusiški', 'Tik lietuviški'];

const AdvancedSearchModal: React.FC<AdvancedSearchModalProps> = ({ show, onHide, onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [genre, setGenre] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');
  const [language, setLanguage] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    if (!show) {
      setKeyword('');
      setCategory('');
      setGenre('');
      setYearFrom('');
      setYearTo('');
      setLanguage('');
      setSubtitle('');
    }
  }, [show]);

  const toggleValue = (
    current: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => setter(current === value ? '' : value);

  const handleYearRange = (from: string, to: string) => {
    if (yearFrom === from && yearTo === to) {
      setYearFrom('');
      setYearTo('');
    } else {
      setYearFrom(from);
      setYearTo(to);
    }
  };

  const handleSearch = () => {
    onSearch({ keyword, category, genre, yearFrom, yearTo, language, subtitles: subtitle });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-neutral-900 rounded-lg p-4 sm:p-6 w-full max-w-5xl max-h-screen overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-neutral-900 z-10">
              <h2 className="text-2xl font-semibold text-white">Išplėstinė paieška</h2>
              <button onClick={onHide} className="text-white hover:text-red-500 text-2xl">✕</button>
            </div>

            <input
              type="text"
              placeholder="Ieškomas žodis..."
              className="w-full mb-4 px-4 py-2 rounded-md bg-neutral-800 border border-neutral-600 text-white focus:outline-none focus:border-green-500"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            {[
              { label: 'Pagrindinė kategorija:', options: categories, selected: category, setter: setCategory },
              { label: 'Žanras:', options: genres, selected: genre, setter: setGenre },
              { label: 'Kalba:', options: languages, selected: language, setter: setLanguage },
              { label: 'Subtitrai:', options: subtitles, selected: subtitle, setter: setSubtitle },
            ].map(({ label, options, selected, setter }) => (
              <div className="mb-4" key={label}>
                <p className="text-white mb-2">{label}</p>
                <div className="flex gap-2 flex-wrap">
                  {options.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleValue(selected, setter, item)}
                      className={`px-3 py-1.5 text-sm rounded-md border cursor-pointer ${
                        selected === item
                          ? 'bg-green-600 border-green-600 text-white'
                          : 'bg-neutral-800 text-white border-neutral-600 hover:bg-neutral-700'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-4">
              <p className="text-white mb-2">Metai:</p>
              <div className="flex gap-2 flex-wrap">
                {yearOptions.map(({ label, from, to }) => (
                  <button
                    key={label}
                    onClick={() => handleYearRange(from, to)}
                    className={`px-3 py-1.5 text-sm rounded-md border cursor-pointer ${
                      yearFrom === from && yearTo === to
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'bg-neutral-800 text-white border-neutral-600 hover:bg-neutral-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
              <button
                onClick={onHide}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 w-full sm:w-auto"
              >
                Už daryti
              </button>
              <button
                onClick={handleSearch}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 w-full sm:w-auto"
              >
                Ieškoti
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdvancedSearchModal;