import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.scss';
import Link from 'next/link';
import LogoIMG from './logo/logo.png';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserModal from '../UserModal/UserModal';
import { baseUrl } from '../Urls'; 
import axios from 'axios';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({
    username: '',
    password: '',
    email: ''
  });
  const router = useRouter();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
      fetchUserData();
    }
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY < 50) {
        navbar?.classList.add('bg-dark');
        navbar?.classList.add('navbar-sticky');
      } else {
        navbar?.classList.remove('bg-dark');
        navbar?.classList.remove('navbar-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/LoginPage');
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userData`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`${styles.navbar} navbar navbar-expand-lg fixed-top navbar-dark bg-dark navbar-sticky`}
      >
        <Container>
        <Link href="/" passHref>
              <img
                src={LogoIMG.src}
                width="150"
                height="120"
                className={`d-inline-block align-top`}
                alt="React Bootstrap logo"
              />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#discover">Discover</Nav.Link>
              <Nav.Link href="#summary">Summary</Nav.Link>
              <Nav.Link href="#takeaways">Takeaways</Nav.Link>
              <Nav.Link href="#subscribe">Subscribe</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {isLoggedIn ? (
                <Button variant="success" onClick={handleShowModal} className="text-uppercase">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ms-2">User</span>
                </Button>
              ) : (
                <Link href="/LoginPage">
                  <Button variant="success" className="text-uppercase">
                    Prisijungti
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <UserModal
        show={showModal}
        handleClose={handleCloseModal}
        user={userData}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default App;
