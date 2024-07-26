import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import LogoIMG from "../components/Navbar/logo/logo.png";
import { baseUrl } from '../components/utils/Urls'; 
import Footer from '../components/Footer/Footer';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, email } = formData;

    if (!username || !password || !email) {
      console.error('All fields are required');
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/register`, formData);
      console.log('Registration response:', response.data);

      // Redirect to VerifyEmailPage after successful registration
      router.push('/VerifyEmailPage');

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container className="custom-container">
      <div className='row justify-content-between'>
        <div className='col-12 text-center'>
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
      <div className='row justify-content-center mt-3'>
        <div className='col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4 px-0 pb-3'>
          <Form onSubmit={handleSubmit}>
            <div className="container-fluid p-0">
              <div className="row gy-3 gx-0">
                <div className="col-12 px-0 registerEl">
                  <Form.Floating>
                    <Form.Control 
                      type="text" 
                      name="username" 
                      value={formData.username} 
                      onChange={handleInputChange} 
                      autoComplete="username" 
                      tabIndex={3} 
                      required 
                    />
                    <Form.Label htmlFor="username">Prisijungimo vardas</Form.Label>
                  </Form.Floating>
                </div>
                <div className="col-12 px-0 registerEl">
                  <Form.Floating>
                    <Form.Control 
                      type="password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleInputChange} 
                      autoComplete="new-password" 
                      tabIndex={4} 
                      required 
                    />
                    <Form.Label htmlFor="password">Slaptažodis</Form.Label>
                  </Form.Floating>
                </div>
                <div className="col-12 px-0 registerEl">
                  <Form.Floating>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      tabIndex={5} 
                      required 
                    />
                    <Form.Label htmlFor="email">El. pašto adresas</Form.Label>
                  </Form.Floating>
                </div>
                <div className="col-12 px-0">
                  <input name="recaptcha" className="recaptcha" type="hidden" value="unset" />
                  <Button type="submit" className="btn btn-dark py-3 w-100 text-uppercase" tabIndex={2} id="submit_button">
                    Registruotis
                  </Button>
                  <div className="text-center mt-3">
                    <Link href="/LoginPage" passHref>
                      <span className="text-white small text-decoration-none">Prisijungti</span>
                    </Link>
                    <span className="text-white mx-2">|</span>
                    <Link href="/?narsyti" passHref>
                      <span className="text-white small text-decoration-none">Naršyti</span>
                    </Link>
                  </div>
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
}

export default RegisterPage;
