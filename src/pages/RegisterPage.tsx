import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import LogoIMG from "../components/Navbar/logo/HorrorHubORiginal.png";
import { baseUrl } from "../components/utils/Urls";
import Footer from "../components/Footer/Footer";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { username, password, email } = formData;

    if (!username || !password || !email) {
      setError("Visi laukai privalomi!");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending registration:", formData); // debug log

      const response = await axios.post(`${baseUrl}/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Registration response:", response.data);

      // redirect to VerifyEmailPage
      router.push("/VerifyEmailPage");
    } catch (err: any) {
      console.error("Registration error:", err);

      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // show backend error
      } else {
        setError("Registracija nepavyko, bandykite dar kartą.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="custom-container">
      <div className="row justify-content-between">
        <div className="col-12 text-center">
          <Link href="/" passHref>
            <img src={LogoIMG.src} width="120" height="120" alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4 px-0 pb-3">
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}

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
                      required
                    />
                    <Form.Label htmlFor="username">
                      Prisijungimo vardas
                    </Form.Label>
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
                      required
                    />
                    <Form.Label htmlFor="email">El. pašto adresas</Form.Label>
                  </Form.Floating>
                </div>
                <div className="col-12 px-0">
                  <Button
                    type="submit"
                    className="btn btn-dark py-3 w-100 text-uppercase"
                    disabled={loading}
                  >
                    {loading ? "Registracija vyksta..." : "Registruotis"}
                  </Button>

                  <div className="text-center mt-3">
                    <Link href="/LoginPage" passHref>
                      <span className="text-white small text-decoration-none">
                        Prisijungti
                      </span>
                    </Link>
                    <span className="text-white mx-2">|</span>
                    <Link href="/?narsyti" passHref>
                      <span className="text-white small text-decoration-none">
                        Naršyti
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </Container>
  );
};

export default RegisterPage;
