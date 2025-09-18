import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.scss';
import Movies from '../Movies/Movies';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} py-7 bg-[#1f1415]`}>
      <Container className={styles.customContainer}>
        <div className='row mb-2 text-center'>
          <div className="col-12 text-container">
          </div>
        </div>
        <div className='row text-center'>
          <div className="col-12 text-container mt-5  ">
            <Movies />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
