import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VerifyPage() {
  const router = useRouter();
  const { userId, uniqueString } = router.query;

  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    if (userId && uniqueString) {
      axios
        .get(
          `https://horrorhub-backend-6.onrender.com/api/verify/${userId}/${uniqueString}`
        )
        .then(() => {
          setStatus("✅ Email verified successfully! Redirecting...");
          setTimeout(() => router.push("/login"), 3000);
        })
        .catch(() => {
          setStatus("❌ Verification link is invalid or expired.");
        });
    }
  }, [userId, uniqueString, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{status}</h1>
    </div>
  );
}
