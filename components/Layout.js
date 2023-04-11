import Head from "next/head";
import Header from "./Shared/Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../features/auth/authSlice";
import Script from "next/script";
import Link from "next/link";
import Footer from "./Shared/Footer/Footer";

const Layout = ({ children, title = "Bangladesh Mart" }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(fetchUser(token));
  }, [dispatch]);

  useEffect(() => {
    const handleUnload = (event) => {
      // Close IndexedDB connection before navigating away from the page
      if (indexedDB) {
        indexedDB.close();
      }
    };
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

  return (
    <div style={{ minHeight: "120vh" }}>
      <Head></Head>

      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
