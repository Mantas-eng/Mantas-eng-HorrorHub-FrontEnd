import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
  genres: string[];
  onSelectGenre: (genre: string) => void;
}

const GenresModal: React.FC<Props> = ({ show, onHide, genres, onSelectGenre }) => {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Body style={{ backgroundColor: '#0e0e0e' }}>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {genres.map((genre) => (
            <Button
              key={genre}
              variant="secondary"
              className="px-3 py-2 text-light"
              style={{ backgroundColor: '#2c2c2c', border: 'none' }}
              onClick={() => {
                onSelectGenre(genre);
                onHide();
              }}
            >
              {genre}
            </Button>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button variant="dark" onClick={onHide}>
            Uždaryti
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GenresModal;
