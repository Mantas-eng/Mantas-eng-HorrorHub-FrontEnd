// src/pages/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { Container, Form, Alert } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import LogoIMG from "../components/Navbar/logo/logo.png";
import { useRouter } from 'next/router';
import { baseUrl } from '../components/utils/Urls';
import Footer from "../components/Footer/Footer";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registered, setRegistered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isRegistered = localStorage.getItem('registered');
    if (isRegistered === 'success') {
      setRegistered(true);
      localStorage.removeItem('registered');
      Cookies.remove('token');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/login`, formData);
      console.log('Login response:', response.data);

      const { token, user } = response.data;
      Cookies.set('token', token, { expires: 1 });
      localStorage.setItem('user', JSON.stringify(user));

      router.push('/');

    } catch (error) {
      console.error('Login error:', error);

      if (error.response && error.response.status === 401) {
        setError('You need to verify your email first.');
      } else {
        setError('Login error. Please check your credentials and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="custom-container">      
      <div className='row justify-content-center'>
        <div className='col-12 text-center mt-4'>
          <Link href="/" passHref>
            <img
              src={LogoIMG.src}
              width="120"
              height="120"
              alt="React Bootstrap logo"
            />
          </Link>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4 px-0 pb-3">
          <Form onSubmit={handleSubmit}>
            <div className="container-fluid p-0">
              <div className="row gx-0">
                <div className="col-12 py-2 px-0">
                  <Form.Floating className="form-input">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      required
                    />
                    <Form.Label htmlFor="email">El. paštas</Form.Label>
                  </Form.Floating>
                </div>
                <div className="col-12 py-2 px-0">
                  <Form.Floating className="form-input">
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                      required
                    />
                    <Form.Label htmlFor="password">Slaptažodis</Form.Label>
                  </Form.Floating>
                </div>
                <div className="col-12 pb-3 px-0">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberThis"
                      name="remember_this"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="rememberThis">Prisiminti mane</label>
                  </div>
                </div>
                <div className="col-12 py-2 px-0">
                  <button type="submit" className="btn btn-dark py-3 w-100 text-uppercase" disabled={loading}>
                    {loading ? 'Vyksta prisijungimas...' : 'Prisijungti'}
                  </button>

                  {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
                  {registered && <Alert variant="success" className="mt-2">Jūs sėkmingai užsiregistravote!</Alert>}

                  <Link href="/RegisterPage" passHref>
                    <button className="btn btn-success btn-sm py-2 w-100 text-uppercase mt-2">Registracija</button>
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className='Footer'>
        <Footer/>
      </div>
    </Container>
  );
};

export default LoginPage;
