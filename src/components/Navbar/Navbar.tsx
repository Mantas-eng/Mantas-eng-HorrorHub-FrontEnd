import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserModal from "../UserModal/UserModal";
import { baseUrl } from "../utils/Urls";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import LogoIMG from "./logo/HorrorHubORiginal.png";
import styles from '../styles/styles.module.scss';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
  password: "",
  email: "",
  role: "",
  _id: ""
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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userData`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    router.push("/LoginPage");
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-[#412a2b] px-6 md:px-10 py-3 text-white transition-colors duration-500 ${
        scrolled ? "bg-[#1f1415]" : "bg-transparent"
      }`}>

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-[160px] md:w-[140px] h-[90px] md:h-[90px]">
            <Link href="/">
              <Image
                src={LogoIMG}
                alt="Logo"
                fill
                className={styles.logoImage}
              />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 justify-end items-center gap-8">

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/Movies" className="text-zinc-300 font-bold hover:text-green-600 no-underline">Movies</Link>
            <Link href="/Series" className="text-zinc-300 font-bold hover:text-green-600 no-underline">Series</Link>
            <Link href="/Genres" className="text-zinc-300 white-400 font-bold hover:text-green-600 no-underline">Genres</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 gap-[6px] md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-8 bg-white rounded-md transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-[10px]" : ""
              }`}
            />
            <span
              className={`h-0.5 w-8 bg-white rounded-md transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-8 bg-white rounded-md transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            />
          </button>

          {/* Mobile dropdown with animation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`absolute top-16 left-0 right-0 bg-[#1f1415] border-t border-[#412a2b] rounded-b-md shadow-md flex flex-col gap-4 p-6 z-40 md:hidden`}
              >

                {/* Login/Register */}
                <div className="w-full">
                  {!isLoggedIn ? (
                    <Link href="/LoginPage" onClick={() => setMenuOpen(false)}>
                      <span className="block w-full bg-green-600 text-white py-3 rounded-md text-center uppercase font-semibold hover:bg-green-700 transition cursor-pointer">
                        Prisijungti
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        handleShowModal();
                        setMenuOpen(false);
                      }}
                      className="w-full bg-green-600 text-white py-3 rounded-md text-center uppercase font-semibold hover:bg-green-700 transition"
                    >
                      User
                    </button>
                  )}
                </div>

                {/* Navigation links */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { href: "/Movies", label: "Movies" },
                    { href: "/Series", label: "Series" },
                    { href: "/Genres", label: "Genres" },
                    { href: "/Bookmarks", label: "Bookmarks" },
                    { href: "/TopRated", label: "Top Rated" },
                    { href: "/NewReleases", label: "New Releases" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                      <span className="block text-center py-3 border border-green-500 rounded-md text-green-500 font-semibold hover:bg-green-600 hover:text-white transition cursor-pointer">
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-5">
            <button aria-label="Search" className="hover:text-red-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button aria-label="Bookmark" className="hover:text-red-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </button>

            {isLoggedIn ? (
              <button
                onClick={handleShowModal}
                className="flex items-center gap-2 hover:text-red-600"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="hidden sm:inline text-sm font-medium">User</span>
              </button>
            ) : (
              <Link href="/LoginPage">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm uppercase font-semibold hover:bg-green-700">
                  Prisijungti
                </button>
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* User modal */}
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
