import React, { useEffect, useState } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "../components/Footer/Footer";

const VerifyEmailPage: React.FC = () => {
  const router = useRouter();
  const { userId, uniqueString } = router.query;

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  // Naudojame environment variable, kad Vercel/localhost veiktų
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080";

  useEffect(() => {
    // Jei URL parametrai dar nepasileido, laukiam
    if (!userId || !uniqueString) return;

    const verifyEmail = async () => {
      try {
        // Siunčiam GET request patvirtinimui
        const response = await axios.get(
          `${baseUrl}/verify/${userId}/${uniqueString}`
        );

        // Jei back-end siunčia token ir user JSON (rekomenduojama)
        if (response.data.token && response.data.user) {
          const { token, user } = response.data;
          Cookies.set("token", token, { expires: 1 });
          localStorage.setItem("user", JSON.stringify(user));
        }

        setMessage("Email successfully verified! Redirecting to home page...");
        setTimeout(() => router.push("/"), 3000);
      } catch (error: any) {
        console.error("Verification error:", error);
        setMessage(
          error.response?.data?.message ||
            "Email verification failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [userId, uniqueString, router]);

  return (
    <Container className="custom-container text-center mt-5">
      <h1>Email Verification</h1>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Alert
          variant={message?.includes("successfully") ? "success" : "danger"}
          className="mt-3"
        >
          {message}
        </Alert>
      )}
      <Footer />
    </Container>
  );
};

export default VerifyEmailPage;
