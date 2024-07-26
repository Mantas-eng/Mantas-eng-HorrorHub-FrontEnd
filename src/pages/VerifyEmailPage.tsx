import React, { useEffect, useState } from 'react';
import { Container, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { baseUrl } from '../components/utils/Urls';
import Footer from '../components/Footer/Footer';
import Cookies from 'js-cookie';

const VerifyEmailPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [parametersLoaded, setParametersLoaded] = useState(false);
  const router = useRouter();
  const { userId, uniqueString } = router.query;

  useEffect(() => {
    if (userId && uniqueString) {
      setParametersLoaded(true);  // Parameters are available
    }
  }, [userId, uniqueString]);

  useEffect(() => {
    const verifyEmail = async () => {
      if (parametersLoaded) {
        try {
          const response = await axios.get(`${baseUrl}/verify/${userId}/${uniqueString}`);
          setMessage('Email has been successfully verified! Redirecting you to the home page...');

          const { token, user } = response.data;
          Cookies.set('token', token, { expires: 1 });
          localStorage.setItem('user', JSON.stringify(user));

          setTimeout(() => {
            router.push(`${baseUrl}/verify/${userId}/$`);
          }, 3000);

        } catch (error) {
          setMessage('Email verification failed. Please try again.');
          console.error('Verification error:', error);
        } finally {
          setLoading(false);
        }
      }
      
    };
    
    if (parametersLoaded) {
      verifyEmail();
    } else if (!loading) {
      setMessage('Invalid or missing verification parameters.');
      setLoading(false);
    }
  }, [parametersLoaded, userId, uniqueString, router]);

  return (
    <Container className="custom-container">
      <div className="text-center mt-5">
        <h1>Email Verification</h1>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <Alert variant={message?.includes('successfully') ? 'success' : 'danger'} className="mt-3">
            {message}
          </Alert>
        )}
        <Footer />
      </div>
    </Container>
  );
};

export default VerifyEmailPage;
