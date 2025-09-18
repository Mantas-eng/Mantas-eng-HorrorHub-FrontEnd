// pages/verify.tsx
import React, { useEffect, useState } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "../components/Footer/Footer";

const VerifyPage: React.FC = () => {
  const router = useRouter();
  const { userId, uniqueString } = router.query;

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  // Naudojame environment variable (Vercel / localhost)
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080/api";

  useEffect(() => {
    if (!userId || !uniqueString) return;

    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/verify/${userId}/${uniqueString}`
        );

        // Jei backend siunčia token ir user JSON
        if (response.data.token && response.data.user) {
          const { token, user } = response.data;
          Cookies.set("token", token, { expires: 1 });
          localStorage.setItem("user", JSON.stringify(user));
        }

        setMessage(
          "✅ Email successfully verified! Redirecting to home page..."
        );
        setTimeout(() => router.push("/"), 3000);
      } catch (error: any) {
        console.error("Verification error:", error);
        setMessage(
          error.response?.data?.message ||
            "❌ Email verification failed. Please try again."
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

export default VerifyPage;
